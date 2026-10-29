import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const BATCH_SIZE = 24;
const EASE = [0.22, 1, 0.36, 1];
// Roughly a 16px gutter on a ~320px column; only used to balance the columns
const GAP_RATIO = 0.05;
const FALLBACK_HEIGHT_RATIO = 3 / 4;

// A small leftover is folded into the last batch so it can still be balanced
const nextVisibleCount = (count, total) =>
  total - (count + BATCH_SIZE) < BATCH_SIZE / 2 ? total : count + BATCH_SIZE;

const heightRatio = (image) =>
  image.width && image.height
    ? image.height / image.width
    : FALLBACK_HEIGHT_RATIO;

const spread = (heights) => Math.max(...heights) - Math.min(...heights);

// Splits one batch across the columns so their bottoms end up as level as possible:
// tallest images first onto the shortest column, then moves/swaps out of the tallest
// column while that narrows the gap. Mutates `heights` and returns each item's column.
const balanceBatch = (heights, sizes) => {
  const columnOf = sizes.map(() => 0);

  sizes
    .map((_, i) => i)
    .sort((a, b) => sizes[b] - sizes[a])
    .forEach((i) => {
      const column = heights.indexOf(Math.min(...heights));
      columnOf[i] = column;
      heights[column] += sizes[i];
    });

  for (let pass = 0; pass < 200; pass++) {
    const tallest = heights.indexOf(Math.max(...heights));
    let best = null;
    let bestSpread = spread(heights) - 1e-6;

    const consider = (delta, target, changes) => {
      const next = [...heights];
      next[tallest] -= delta;
      next[target] += delta;
      if (spread(next) < bestSpread) {
        bestSpread = spread(next);
        best = changes;
      }
    };

    sizes.forEach((a, i) => {
      if (columnOf[i] !== tallest) return;
      for (let target = 0; target < heights.length; target++) {
        if (target === tallest) continue;
        consider(a, target, [[i, target]]);
        sizes.forEach((b, j) => {
          if (columnOf[j] === target && b < a) {
            consider(a - b, target, [
              [i, target],
              [j, tallest],
            ]);
          }
        });
      }
    });

    if (!best) break;
    best.forEach(([i, column]) => {
      heights[columnOf[i]] -= sizes[i];
      heights[column] += sizes[i];
      columnOf[i] = column;
    });
  }

  return columnOf;
};

// Each batch becomes its own band of columns with a level bottom edge. "Load more"
// only appends a band, so images already on screen never move or resize.
const buildBands = (images, visibleCount, columnCount) => {
  const bands = [];
  let start = 0;

  while (start < visibleCount) {
    const end = Math.min(nextVisibleCount(start, images.length), visibleCount);
    const batch = images.slice(start, end);
    const columns = Array.from({ length: columnCount }, () => []);
    const columnOf = balanceBatch(
      Array(columnCount).fill(0),
      batch.map((image) => heightRatio(image) + GAP_RATIO),
    );

    batch.forEach((image, offset) => {
      const column = columns[columnOf[offset]];
      column.push({
        image,
        index: start + offset,
        offset,
        eager: bands.length === 0 && column.length < 2,
      });
    });
    bands.push(columns);
    start = end;
  }

  return bands;
};

const getColumnCount = (total) => {
  if (typeof window === "undefined") return 2;
  if (window.matchMedia("(min-width: 1024px)").matches) {
    return total <= 6 ? 2 : total <= 12 ? 3 : 4;
  }
  if (window.matchMedia("(min-width: 768px)").matches) return 3;
  return 2;
};

const useColumnCount = (total) => {
  const [columnCount, setColumnCount] = useState(() => getColumnCount(total));

  useEffect(() => {
    const update = () => setColumnCount(getColumnCount(total));
    const queries = ["(min-width: 768px)", "(min-width: 1024px)"].map((query) =>
      window.matchMedia(query),
    );

    update();
    queries.forEach((mq) => mq.addEventListener("change", update));
    return () =>
      queries.forEach((mq) => mq.removeEventListener("change", update));
  }, [total]);

  return columnCount;
};

const GalleryItem = ({ image, offset, eager, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const ratio = heightRatio(image);

  return (
    <motion.div
      className="group flex cursor-pointer flex-col"
      // Shorter columns share out their leftover space in proportion to image
      // height, so every column in a band ends on the same line with a slight crop
      style={{ flexGrow: ratio }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      // Stagger restarts for each "Load more" batch instead of growing with the index
      transition={{
        duration: 0.5,
        ease: EASE,
        delay: Math.min(offset, 12) * 0.03,
      }}
      onClick={onClick}
    >
      <div
        className="relative isolate grow overflow-hidden rounded-lg bg-gray-100 shadow-md transition-shadow duration-300 hover:shadow-xl"
        style={{ aspectRatio: `1 / ${ratio}` }}
      >
        <img
          src={image.src}
          alt={`Portfolio ${image.category} ${image.id}`}
          width={image.width}
          height={image.height}
          // will-change keeps the image on its own layer, so the hover zoom
          // doesn't flash when the browser promotes/demotes it
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 ease-out will-change-transform group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
    </motion.div>
  );
};

const MasonryGallery = ({ images, onImageClick }) => {
  const [visibleCount, setVisibleCount] = useState(() =>
    nextVisibleCount(0, images.length),
  );
  const columnCount = useColumnCount(images.length);

  const bands = useMemo(
    () => buildBands(images, visibleCount, columnCount),
    [images, visibleCount, columnCount],
  );
  const hasMore = visibleCount < images.length;

  return (
    <div className="portfolio-gallery w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col gap-3 md:gap-4">
        {bands.map((columns, bandIndex) => (
          <div key={bandIndex} className="flex gap-3 md:gap-4">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex min-w-0 flex-1 flex-col gap-3 md:gap-4"
              >
                {column.map(({ image, index, offset, eager }) => (
                  <GalleryItem
                    key={image.id}
                    image={image}
                    offset={offset}
                    eager={eager}
                    onClick={() => onImageClick(index)}
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) =>
                nextVisibleCount(count, images.length),
              )
            }
            className="rounded-lg bg-[#2D6B7A] px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1e5562]"
          >
            Load more ({images.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default MasonryGallery;
