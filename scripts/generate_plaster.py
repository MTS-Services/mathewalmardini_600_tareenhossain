"""Generate a seamless warm Venetian plaster tile matching the B·SPOKE reference.

Reference: oatmeal #E6E1D8, soft limewash clouds, fine tactile paper grain.
"""
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
from pathlib import Path

W = H = 640
rng = np.random.default_rng(42)

BASE = np.array([0xE6, 0xE1, 0xD8], dtype=np.float32)
HIGHLIGHT = np.array([0xF3, 0xEF, 0xE8], dtype=np.float32)
SHADOW = np.array([0xD0, 0xC8, 0xB8], dtype=np.float32)
WARM = np.array([0xC4, 0xB4, 0x98], dtype=np.float32)

yy, xx = np.mgrid[0:H, 0:W]


def seamless_fbm(octaves=6, seed=1, scale=1.0):
    r = np.random.default_rng(seed)
    n = np.zeros((H, W), dtype=np.float32)
    amp = 1.0
    for o in range(octaves):
        fx = max(1, int((1 + o) * scale))
        fy = max(1, int((1 + (o * 2) % 3) * scale))
        px, py = r.uniform(0, 2 * np.pi, 2)
        layer = np.sin(2 * np.pi * fx * xx / W + px) * np.cos(
            2 * np.pi * fy * yy / H + py
        )
        qx, qy = r.uniform(0, 2 * np.pi, 2)
        layer += 0.55 * np.sin(2 * np.pi * fy * xx / W + qx) * np.sin(
            2 * np.pi * fx * xx / H + qy
        )
        # fix: use yy for second sin
        layer = np.sin(2 * np.pi * fx * xx / W + px) * np.cos(
            2 * np.pi * fy * yy / H + py
        )
        layer += 0.55 * np.sin(2 * np.pi * fy * xx / W + qx) * np.sin(
            2 * np.pi * fx * yy / H + qy
        )
        n += layer * amp
        amp *= 0.55
    n /= np.max(np.abs(n)) + 1e-6
    return n


clouds = seamless_fbm(7, 11, scale=1.0)
brush = seamless_fbm(5, 29, scale=2.4) * 0.4
streak = seamless_fbm(4, 71, scale=3.0) * 0.22
mottle = clouds * 0.7 + brush * 0.22 + streak * 0.08
t = (mottle + 1.0) * 0.5

shadow_w = np.clip(1.0 - t * 2.0, 0, 1) ** 1.05
highlight_w = np.clip(t * 2.0 - 1.0, 0, 1) ** 1.05
base_w = np.clip(1.0 - shadow_w - highlight_w, 0, 1)
wsum = shadow_w + highlight_w + base_w + 1e-6
shadow_w, highlight_w, base_w = shadow_w / wsum, highlight_w / wsum, base_w / wsum

tone = (
    SHADOW[None, None, :] * shadow_w[..., None]
    + BASE[None, None, :] * base_w[..., None]
    + HIGHLIGHT[None, None, :] * highlight_w[..., None]
)

# Fine paper grain — keep crisp (reference is tactile, not blurry)
noise = rng.normal(0, 1, (H, W)).astype(np.float32)
tmp = Image.fromarray(
    ((noise - noise.min()) / (np.ptp(noise) + 1e-6) * 255).astype(np.uint8)
)
# tiny blur only — preserve grit
tmp = tmp.filter(ImageFilter.BoxBlur(0.4))
blurred = np.asarray(tmp, dtype=np.float32)
blurred = (blurred / 255.0 - 0.5) * 2.0
grain = blurred * 6.5

# Sparse limestone flecks
speckle = rng.random((H, W))
grit = np.zeros((H, W), dtype=np.float32)
dark_m = speckle > 0.993
light_m = speckle < 0.005
n_dark = int(np.count_nonzero(dark_m))
n_light = int(np.count_nonzero(light_m))
if n_dark:
    grit[dark_m] = rng.uniform(-6, -2, n_dark)
if n_light:
    grit[light_m] = rng.uniform(1.5, 4.5, n_light)

valley = shadow_w[..., None]
accent_mix = valley * 0.04
img = tone * (1.0 - accent_mix) + WARM[None, None, :] * accent_mix
img = img + grain[..., None] + grit[..., None]
img = np.clip(img, 0, 255).astype(np.uint8)

out = Image.fromarray(img, mode="RGB")
out = ImageEnhance.Contrast(out).enhance(0.96)
out = ImageEnhance.Color(out).enhance(0.97)

public = Path(__file__).resolve().parents[1] / "public"
public.mkdir(parents=True, exist_ok=True)
jpg = public / "plaster-texture.jpg"
out.save(jpg, "JPEG", quality=92, optimize=True, progressive=True)
mean = np.asarray(out).mean(axis=(0, 1))
print("saved", jpg, "bytes", jpg.stat().st_size)
print(
    "mean_rgb",
    [round(float(x), 1) for x in mean],
    "hex",
    "#{0:02x}{1:02x}{2:02x}".format(*(int(x) for x in mean)),
)
