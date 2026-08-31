"""Bake a full-viewport limewash wall (not a small repeating tile)."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

OUT_DIR = Path(__file__).resolve().parents[1] / "public" / "textures"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def value_noise(h: int, w: int, cell: int, rng: np.random.Generator) -> np.ndarray:
    gy = max(2, h // cell)
    gx = max(2, w // cell)
    grid = rng.random((gy + 1, gx + 1)).astype(np.float32)
    y = np.linspace(0, gy, h, endpoint=False)
    x = np.linspace(0, gx, w, endpoint=False)
    yi, xi = np.meshgrid(y, x, indexing="ij")
    y0 = np.floor(yi).astype(np.int32)
    x0 = np.floor(xi).astype(np.int32)
    fy = yi - y0
    fx = xi - x0
    sy = fy * fy * (3.0 - 2.0 * fy)
    sx = fx * fx * (3.0 - 2.0 * fx)
    n00 = grid[y0, x0]
    n10 = grid[y0, x0 + 1]
    n01 = grid[y0 + 1, x0]
    n11 = grid[y0 + 1, x0 + 1]
    return (n00 * (1 - sx) + n10 * sx) * (1 - sy) + (n01 * (1 - sx) + n11 * sx) * sy


def fbm(h: int, w: int, cell: int, octaves: int, rng: np.random.Generator) -> np.ndarray:
    total = np.zeros((h, w), dtype=np.float32)
    amp = 1.0
    amp_sum = 0.0
    c = cell
    for _ in range(octaves):
        total += value_noise(h, w, max(4, c), rng) * amp
        amp_sum += amp
        amp *= 0.52
        c = max(4, c // 2)
    return total / amp_sum


def motion_blur_x(a: np.ndarray, radius: int) -> np.ndarray:
    acc = np.zeros_like(a)
    for i in range(-radius, radius + 1):
        acc += np.roll(a, i, axis=1)
    return acc / float(2 * radius + 1)


def motion_blur_diag(a: np.ndarray, radius: int) -> np.ndarray:
    acc = np.zeros_like(a)
    for i in range(-radius, radius + 1):
        acc += np.roll(np.roll(a, i, axis=0), i, axis=1)
    return acc / float(2 * radius + 1)


def make_wall(w: int = 1920, h: int = 1080) -> Image.Image:
    rng = np.random.default_rng(7)

    # Viewport-scale limewash clouds (the missing "hand-applied plaster")
    clouds = fbm(h, w, cell=320, octaves=5, rng=rng)
    plaster = fbm(h, w, cell=110, octaves=4, rng=rng)
    trowel = motion_blur_x(fbm(h, w, cell=160, octaves=3, rng=rng), radius=55)
    wash = motion_blur_diag(fbm(h, w, cell=220, octaves=3, rng=rng), radius=35)

    field = clouds * 0.46 + trowel * 0.22 + wash * 0.16 + plaster * 0.16
    field = (field - field.min()) / (field.max() - field.min() + 1e-6)
    # Keep it a wall, not camouflage — but clouds must still READ
    field = 0.5 + (field - 0.5) * 0.88

    c_hi = np.array([246, 241, 230], dtype=np.float32)  # lit plaster
    c_mid = np.array([235, 227, 213], dtype=np.float32)  # #ebe3d5
    c_lo = np.array([196, 178, 152], dtype=np.float32)  # warm sand patch

    low = np.clip((0.50 - field) / 0.50, 0, 1)[..., None] ** 1.15
    high = np.clip((field - 0.50) / 0.50, 0, 1)[..., None] ** 1.1
    mid = np.clip(1.0 - low - high, 0, 1)
    rgb = c_lo * low + c_mid * mid + c_hi * high

    # Fine mineral grit — quiet, not salt-and-pepper
    grain = rng.normal(0, 1, (h, w)).astype(np.float32)
    rgb += grain[..., None] * 3.2

    # Sparse limestone flecks
    speckle = rng.random((h, w))
    rgb[speckle > 0.996] -= np.array([8, 9, 10], dtype=np.float32)
    rgb[speckle < 0.004] += np.array([6, 5, 4], dtype=np.float32)

    rgb = np.clip(rgb, 0, 255).astype(np.uint8)
    return Image.fromarray(rgb, mode="RGB")


def make_grain(size: int = 256) -> Image.Image:
    rng = np.random.default_rng(19)
    n = rng.normal(128, 18, (size, size)).astype(np.float32)
    n = np.clip(n, 0, 255).astype(np.uint8)
    return Image.fromarray(n, mode="L")


if __name__ == "__main__":
    wall = make_wall()
    wall_path = OUT_DIR / "limewash-wall.webp"
    wall.save(wall_path, format="WEBP", quality=78, method=6)
    arr = np.asarray(wall)
    print(
        "wall",
        wall_path,
        wall_path.stat().st_size,
        "mean",
        arr.mean((0, 1)).round(1),
        "std",
        arr.std((0, 1)).round(1),
    )

    grain = make_grain()
    grain_path = OUT_DIR / "limewash-grain.webp"
    grain.save(grain_path, format="WEBP", quality=80, method=6)
    print("grain", grain_path, grain_path.stat().st_size)
