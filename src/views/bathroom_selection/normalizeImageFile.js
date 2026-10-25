/** Detect iPhone HEIC/HEIF and convert to JPEG for browser + S3. */
export function isHeicLike(file) {
  if (!file) return false;
  const name = (file.name || "").toLowerCase();
  const type = (file.type || "").toLowerCase();
  return (
    type === "image/heic" ||
    type === "image/heif" ||
    name.endsWith(".heic") ||
    name.endsWith(".heif")
  );
}

export function isAllowedImageFile(file) {
  if (!file) return false;
  const name = (file.name || "").toLowerCase();
  const type = (file.type || "").toLowerCase();
  if (type.startsWith("image/")) return true;
  return /\.(jpe?g|png|webp|heic|heif)$/i.test(name);
}

export async function normalizeImageFile(file) {
  if (!isHeicLike(file)) return file;

  const heic2any = (await import("heic2any")).default;
  const converted = await heic2any({
    blob: file,
    toType: "image/jpeg",
    quality: 0.92,
  });
  const blob = Array.isArray(converted) ? converted[0] : converted;
  const base =
    (file.name || "iphone-photo")
      .replace(/\.heic$/i, "")
      .replace(/\.heif$/i, "")
      .trim() || "iphone-photo";

  return new File([blob], `${base}.jpg`, {
    type: "image/jpeg",
    lastModified: Date.now(),
  });
}
