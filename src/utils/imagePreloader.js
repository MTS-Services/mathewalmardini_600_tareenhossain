import { getAllImages } from "../data/portfolioData";

const EXTRA_URLS = [
  // Bathroom Renovation
  "https://dc3v08iv2c2ou.cloudfront.net/bathroom_renovation/Bathroom_1.jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/bathroom_renovation/Before_and_after+1.jpg",
  // Kitchen Renovation
  "https://dc3v08iv2c2ou.cloudfront.net/kitchen_renovation/Kitchen_Sunbury_2.jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/kitchen_renovation/image_2.JPG",
  // Laundry Renovation
  "https://dc3v08iv2c2ou.cloudfront.net/laundry_renovation/laundry_1.jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/laundry_renovation/laundry_2.jpg",
  // Shop Fitouts
  "https://dc3v08iv2c2ou.cloudfront.net/shop_fitouts/IMG_1541.JPG",
  "https://dc3v08iv2c2ou.cloudfront.net/shop_fitouts/IMG_1542.JPG",
  "https://dc3v08iv2c2ou.cloudfront.net/shop_fitouts/IMG_1543.JPG",
  "https://dc3v08iv2c2ou.cloudfront.net/Our_services/envato-labs-image-edit.png",
  // PhotoGallery
  "https://dc3v08iv2c2ou.cloudfront.net/PhotoGallery/20240604_153801_(1).jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/PhotoGallery/20250404_123149.jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/PhotoGallery/Bath.jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/PhotoGallery/Craigieburn+5.jpg",
  "https://dc3v08iv2c2ou.cloudfront.net/PhotoGallery/IMG_9819.JPG",
  "https://dc3v08iv2c2ou.cloudfront.net/PhotoGallery/WhatsApp+Image+2023-03-29+at+1.22.25+PM+(1).jpeg",
  // Our Work
  "https://dc3v08iv2c2ou.cloudfront.net/Our_work/Photo4.JPG",
  "https://dc3v08iv2c2ou.cloudfront.net/Our_work/IMG_1517.JPG",
  // Our Services images (non-video)
  "https://dc3v08iv2c2ou.cloudfront.net/Our_services/modern-washing-machine-in-a-laundry-room-against-a-2026-01-09-00-42-26-utc.jpg",
];

const BATCH_SIZE = 4;
const DELAY_BETWEEN_BATCHES = 100;

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve;
    img.src = url;
  });
}

function getAllImageUrls() {
  const portfolioUrls = getAllImages()
    .map((item) => item.src)
    .filter((src) => !src.endsWith(".mp4") && !src.endsWith(".mov"));

  return [...new Set([...portfolioUrls, ...EXTRA_URLS])];
}

async function preloadInBatches(urls) {
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(preloadImage));
    if (i + BATCH_SIZE < urls.length) {
      await new Promise((r) => setTimeout(r, DELAY_BETWEEN_BATCHES));
    }
  }
}

export function startBackgroundPreload() {
  const run = () => preloadInBatches(getAllImageUrls());

  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => run(), { timeout: 5000 });
  } else {
    setTimeout(() => run(), 3000);
  }
}
