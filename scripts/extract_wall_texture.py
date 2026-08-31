"""Extract seamless plaster wall tile DIRECTLY from the B·SPOKE reference image."""
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
from pathlib import Path

REF = Path(__file__).resolve().parent / "ref-wall.jpg"
OUT = Path(__file__).resolve().parents[1] / "public" / "plaster-texture.jpg"

img = Image.open(REF).convert("RGB")
arr = np.asarray(img).astype(np.float32)
h, w = arr.shape[:2]

# Clean wall patches (avoid headline text + hero photo on the right)
patches = [
    arr[20:95, 180:420],          # top band under nav
    arr[95:200, 20:90],           # far left under logo
    arr[420:560, 20:100],         # lower left
    arr[580:660, 40:380],         # bottom stats area (filter text later)
    arr[100:280, 400:470],        # gap left of hero image
    arr[480:560, 400:480],        # lower gap near hero
]

# Keep only warm plaster pixels (drop dark text / photo)
clean = []
for p in patches:
    lum = p.mean(axis=2)
    # wall is ~210–225; text is dark; photo has high variance greens/blues
    mask = (lum > 195) & (lum < 240)
    # drop pixels that are too cool (photo spill) or too saturated
    r, g, b = p[..., 0], p[..., 1], p[..., 2]
    warm = (r > g - 2) & (g > b - 2) & ((r - b) > 8)
    m = mask & warm
    if m.any():
        clean.append(p[m])

bg = np.concatenate(clean, axis=0)
mean = bg.mean(axis=0)
std = bg.std(axis=0)
print("wall mean", mean, "std", std)
print("hex #{:02x}{:02x}{:02x}".format(*(int(x) for x in mean)))

# --- Build tile from REAL residual texture of reference ---
# Crop a large mostly-clean region and replace text pixels with local wall mean
region = arr[30 : h - 40, 15 : int(w * 0.40)].copy()
rh, rw = region.shape[:2]
lum = region.mean(axis=2)
textish = lum < 190

# Fill text with neighboring wall via blur of masked image
filled = region.copy()
filled[textish] = mean
# soften fill edges
blur = Image.fromarray(np.clip(filled, 0, 255).astype(np.uint8)).filter(
    ImageFilter.GaussianBlur(radius=2.5)
)
blur_a = np.asarray(blur).astype(np.float32)
# only blend where we filled
mask3 = textish.astype(np.float32)[..., None]
# dilate mask slightly
dil = Image.fromarray((textish.astype(np.uint8) * 255)).filter(
    ImageFilter.MaxFilter(5)
)
dil_m = (np.asarray(dil) > 0).astype(np.float32)[..., None]
filled = region * (1 - dil_m) + blur_a * dil_m

# Extract residual (texture) relative to local mean
local = Image.fromarray(np.clip(filled, 0, 255).astype(np.uint8)).filter(
    ImageFilter.GaussianBlur(radius=18)
)
local_a = np.asarray(local).astype(np.float32)
residual = filled - local_a  # true plaster variation from photo

# Make a seamless TILE_SIZE tile by blending overlapping crops of residual
TILE = 512
# take several crops from residual field
rng = np.random.default_rng(7)
tile = np.zeros((TILE, TILE, 3), dtype=np.float32)
weight = np.zeros((TILE, TILE), dtype=np.float32)

# Hann window for soft quilting
wy = np.hanning(TILE).astype(np.float32)
wx = np.hanning(TILE).astype(np.float32)
win = np.outer(wy, wx) + 1e-4

ys = max(1, rh - TILE)
xs = max(1, rw - TILE)
positions = [
    (0, 0),
    (0, min(xs - 1, rw // 4)),
    (min(ys - 1, rh // 5), 0),
    (min(ys - 1, rh // 3), min(xs - 1, rw // 5)),
    (min(ys - 1, rh // 6), min(xs - 1, rw // 3)),
]
# if region smaller than TILE, pad
if rh < TILE or rw < TILE:
    pad = np.zeros((max(rh, TILE) + 64, max(rw, TILE) + 64, 3), dtype=np.float32)
    pad[:rh, :rw] = residual
    # mirror pad
    residual = np.pad(residual, ((0, max(0, TILE - rh + 32)), (0, max(0, TILE - rw + 32)), (0, 0)), mode="reflect")
    rh, rw = residual.shape[:2]
    ys = max(1, rh - TILE)
    xs = max(1, rw - TILE)
    positions = [(0, 0), (0, xs // 2), (ys // 2, 0), (ys // 2, xs // 2), (ys // 3, xs // 3)]

for (y0, x0) in positions:
    y0 = int(np.clip(y0, 0, rh - TILE))
    x0 = int(np.clip(x0, 0, rw - TILE))
    patch = residual[y0 : y0 + TILE, x0 : x0 + TILE]
    if patch.shape[0] != TILE or patch.shape[1] != TILE:
        continue
    tile += patch * win[..., None]
    weight += win

tile = tile / weight[..., None]

# Make edges seamless: average with rolled versions
for shift in (TILE // 2,):
    rolled = np.roll(np.roll(tile, shift, 0), shift, 1)
    # blend near edges only
    edge = np.ones((TILE, TILE), dtype=np.float32)
    m = 48
    edge[:m, :] *= np.linspace(0, 1, m)[:, None]
    edge[-m:, :] *= np.linspace(1, 0, m)[:, None]
    edge[:, :m] *= np.linspace(0, 1, m)[None, :]
    edge[:, -m:] *= np.linspace(1, 0, m)[None, :]
    # invert: stronger blend at edges
    eblend = 1.0 - edge
    eblend = np.clip(eblend, 0, 1)
    # soften
    tile = tile * (1 - eblend * 0.5)[..., None] + rolled * (eblend * 0.5)[..., None]

# Final: base wall color + residual texture (boost slightly so grit reads on screen)
# Reference residual is subtle; scale ~1.35 to keep tactile on monitors
amp = 1.45
out = mean[None, None, :] + tile * amp

# Extra fine grit sampled from real residual high-freq
hf = Image.fromarray(
    np.clip(tile.mean(axis=2) * 8 + 128, 0, 255).astype(np.uint8)
).filter(ImageFilter.DETAIL)
# add tiny warm variation
noise = np.random.default_rng(3).normal(0, 1.1, (TILE, TILE, 1)).astype(np.float32)
out = out + noise

out = np.clip(out, 0, 255).astype(np.uint8)
im = Image.fromarray(out, mode="RGB")
# very light blur — keep sandy wall grit
im = ImageEnhance.Color(im).enhance(1.02)
im = ImageEnhance.Contrast(im).enhance(1.04)

OUT.parent.mkdir(parents=True, exist_ok=True)
im.save(OUT, "JPEG", quality=93, optimize=True, progressive=True)
m2 = np.asarray(im).mean(axis=(0, 1))
print("saved", OUT, "bytes", OUT.stat().st_size)
print("tile mean", [round(float(x), 1) for x in m2], "#{0:02x}{1:02x}{2:02x}".format(*(int(x) for x in m2)))
