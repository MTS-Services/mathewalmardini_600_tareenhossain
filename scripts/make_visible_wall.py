"""Strong visible limewash / plaster wall tile — mottling + sandy grit must READ on screen."""
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
from pathlib import Path

W = H = 768
rng = np.random.default_rng(21)

# Warm plaster from B·SPOKE reference (lighter oatmeal, not grey)
BASE = np.array([230.0, 224.0, 212.0])       # #e6e0d4
HIGHLIGHT = np.array([242.0, 237.0, 228.0])  # #f2ede4
SHADOW = np.array([208.0, 198.0, 182.0])     # #d0c6b6
WARM = np.array([198.0, 180.0, 150.0])       # deeper warm in recesses

yy, xx = np.mgrid[0:H, 0:W]


def fbm(octaves, seed, scale=1.0):
    r = np.random.default_rng(seed)
    n = np.zeros((H, W), dtype=np.float32)
    amp = 1.0
    for o in range(octaves):
        fx = max(1, int((1 + o) * scale))
        fy = max(1, int((1 + (o * 3) % 4) * scale))
        px, py = r.uniform(0, 2 * np.pi, 2)
        layer = np.sin(2 * np.pi * fx * xx / W + px) * np.cos(
            2 * np.pi * fy * yy / H + py
        )
        qx, qy = r.uniform(0, 2 * np.pi, 2)
        layer += 0.6 * np.sin(2 * np.pi * fy * xx / W + qx) * np.sin(
            2 * np.pi * fx * yy / H + qy
        )
        n += layer * amp
        amp *= 0.52
    n /= np.max(np.abs(n)) + 1e-6
    return n


# LARGE cloudy limewash blotches — this is the "wall" feel
clouds = fbm(8, 11, 1.0)
# Mid trowel / brush movement
brush = fbm(6, 33, 2.8) * 0.55
# Finer plaster unevenness
fine = fbm(5, 77, 5.5) * 0.3
mottle = clouds * 0.55 + brush * 0.3 + fine * 0.15
t = (mottle + 1.0) * 0.5

# Stronger weight into shadow/highlight so mottling is VISIBLE
shadow_w = np.clip(1.0 - t * 2.0, 0, 1) ** 0.85
highlight_w = np.clip(t * 2.0 - 1.0, 0, 1) ** 0.85
base_w = np.clip(1.0 - shadow_w - highlight_w, 0, 1)
wsum = shadow_w + highlight_w + base_w + 1e-6
shadow_w, highlight_w, base_w = shadow_w / wsum, highlight_w / wsum, base_w / wsum

tone = (
    SHADOW[None, None, :] * shadow_w[..., None]
    + BASE[None, None, :] * base_w[..., None]
    + HIGHLIGHT[None, None, :] * highlight_w[..., None]
)

# Warm pigment in valleys
valley = shadow_w[..., None]
tone = tone * (1.0 - valley * 0.08) + WARM[None, None, :] * (valley * 0.08)

# DENSE sandy mineral grain (must be visible, not TV static)
noise = rng.normal(0, 1, (H, W)).astype(np.float32)
tmp = Image.fromarray(
    ((noise - noise.min()) / (np.ptp(noise) + 1e-6) * 255).astype(np.uint8)
)
# almost no blur — keep grit sharp like plaster sand
grain = (np.asarray(tmp, dtype=np.float32) / 255.0 - 0.5) * 2.0
grain = grain * 11.0  # strong micro contrast

# Extra mid-frequency "tooth" (paper / wall grit clumps)
tooth_n = rng.normal(0, 1, (H // 2, W // 2)).astype(np.float32)
tooth_img = Image.fromarray(
    ((tooth_n - tooth_n.min()) / (np.ptp(tooth_n) + 1e-6) * 255).astype(np.uint8)
).resize((W, H), Image.BILINEAR)
tooth = (np.asarray(tooth_img, dtype=np.float32) / 255.0 - 0.5) * 2.0 * 5.5

# Sparse flecks
speckle = rng.random((H, W))
grit = np.zeros((H, W), dtype=np.float32)
dm = speckle > 0.992
lm = speckle < 0.006
if dm.any():
    grit[dm] = rng.uniform(-8, -3, int(dm.sum()))
if lm.any():
    grit[lm] = rng.uniform(2, 6, int(lm.sum()))

img = tone + grain[..., None] + tooth[..., None] + grit[..., None]
img = np.clip(img, 0, 255).astype(np.uint8)

out = Image.fromarray(img, mode="RGB")
# Keep contrast so texture survives JPEG + screen
out = ImageEnhance.Contrast(out).enhance(1.08)
out = ImageEnhance.Color(out).enhance(1.05)

public = Path(__file__).resolve().parents[1] / "public"
public.mkdir(parents=True, exist_ok=True)
# cache-bust new name
jpg = public / "wall-limewash.jpg"
out.save(jpg, "JPEG", quality=95, optimize=True, progressive=True)

# also write a 2x2 preview strip for sanity
preview = Image.new("RGB", (W * 2, H * 2))
for y in range(2):
    for x in range(2):
        preview.paste(out, (x * W, y * H))
preview.resize((512, 512), Image.LANCZOS).save(
    public / "wall-limewash-preview.jpg", quality=90
)

mean = np.asarray(out).mean(axis=(0, 1))
std = np.asarray(out).std(axis=(0, 1))
print("saved", jpg, "bytes", jpg.stat().st_size)
print("mean", [round(float(x), 1) for x in mean], "#{0:02x}{1:02x}{2:02x}".format(*(int(x) for x in mean)))
print("std", [round(float(x), 1) for x in std], "(higher = more visible texture)")
