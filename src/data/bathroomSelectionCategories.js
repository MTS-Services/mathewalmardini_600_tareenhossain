const CDN = "https://dc3v08iv2c2ou.cloudfront.net";

export const BATHROOM_TYPES = [
  { value: "main", label: "Main Bathroom" },
  { value: "ensuite", label: "Ensuite" },
  { value: "powder", label: "Powder Room" },
  { value: "other", label: "Other" },
];

export const FINISH_OPTIONS = [
  "Chrome",
  "Matte Black",
  "Brushed Nickel",
  "Other",
];

export const YES_NO = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

export const BATHROOM_CATEGORIES = [
  {
    id: "tiles",
    number: "01",
    title: "Tiles",
    image: `${CDN}/bathroom_gallery/sunbury+2.jpg`,
    questions: [
      {
        id: "where",
        label: "Where are the tiles required?",
        type: "single",
        options: [
          "Entire Bathroom",
          "Wet Areas Only",
          "Floor Only",
          "Walls Only",
          "Custom",
        ],
        customField: "customWhere",
        customPlaceholder: "Describe which areas need tiles",
      },
      {
        id: "customWhere",
        label: "Please describe custom tile areas",
        type: "text",
        placeholder: "Describe which areas need tiles",
        inline: true,
        showIf: (a) => a.where === "Custom",
      },
      {
        id: "tileType",
        label: "What type of tile?",
        type: "single",
        options: ["Porcelain", "Ceramic", "Stone", "Other"],
      },
      {
        id: "tileSize",
        label: "What size?",
        type: "single",
        options: ["300×300", "300×600", "600×600", "600×1200", "Other"],
      },
      {
        id: "featureTile",
        label: "Feature tile?",
        type: "yesNo",
      },
      {
        id: "featureTilePhoto",
        label: "Upload a photo showing which wall",
        type: "imageUpload",
        notesField: "featureTileNotes",
        notesPlaceholder: "Optional: describe which wall or add notes",
        showIf: (a) => a.featureTile === "yes",
      },
    ],
  },
  {
    id: "shower",
    number: "02",
    title: "Shower",
    image: `${CDN}/bathroom_gallery/Shower+Sunbury.jpg`,
    questions: [
      {
        id: "screenRequired",
        label: "Shower screen required?",
        type: "yesNo",
      },
      {
        id: "screenType",
        label: "Screen type",
        type: "single",
        options: ["Frameless", "Semi-Frameless"],
        showIf: (a) => a.screenRequired === "yes",
      },
      {
        id: "doorType",
        label: "Door type",
        type: "single",
        options: ["Hinged", "Sliding", "Fixed Panel", "Other"],
        showIf: (a) => a.screenRequired === "yes",
      },
      {
        id: "configuration",
        label: "Shower configuration",
        type: "single",
        options: ["Single Shower", "Shower Over Bath"],
      },
      {
        id: "showerHead",
        label: "Shower head",
        type: "single",
        options: [
          "Fixed",
          "Rainfall",
          "Handheld",
          "Rail Shower",
          "Twin System",
        ],
      },
      {
        id: "mixerRequired",
        label: "Shower mixer required?",
        type: "yesNo",
      },
      {
        id: "finish",
        label: "Finish",
        type: "single",
        options: FINISH_OPTIONS,
      },
      {
        id: "niche",
        label: "Do you require a shower niche?",
        type: "yesNo",
      },
      {
        id: "nicheNote",
        label: "Please note",
        type: "noteAck",
        note: "Please note: Shower niche size and feasibility are subject to the existing stud spacing and any plumbing, electrical or other obstructions found within the wall after demolition.",
        confirmLabel: "Noted",
        hideInReview: true,
        showIf: (a) => a.niche === "yes",
      },
    ],
  },
  {
    id: "bathtub",
    number: "03",
    title: "Bathtub",
    image: `${CDN}/bathroom_gallery/Bath.jpg`,
    questions: [
      {
        id: "type",
        label: "What type?",
        type: "single",
        options: [
          "Freestanding",
          "Back-to-Wall",
          "Built-In",
          "Shower/Bath Combination",
        ],
      },
      {
        id: "size",
        label: "What size?",
        type: "single",
        options: ["1500mm", "1600mm", "1700mm", "1800mm", "Other"],
      },
      {
        id: "mixerRequired",
        label: "Bath mixer required?",
        type: "yesNo",
      },
      {
        id: "niche",
        label: "Do you require a bath niche?",
        type: "yesNo",
      },
      {
        id: "nicheNote",
        label: "Please note",
        type: "noteAck",
        note: "Please note: Bath niche size and feasibility are subject to the existing stud spacing and any plumbing, electrical or other obstructions found within the wall after demolition.",
        confirmLabel: "Noted",
        hideInReview: true,
        showIf: (a) => a.niche === "yes",
      },
    ],
  },
  {
    id: "vanity",
    number: "04",
    title: "Vanity",
    image: `${CDN}/bathroom_gallery/IMG_4150.jpg`,
    questions: [
      {
        id: "type",
        label: "What type?",
        type: "single",
        options: ["Wall-Hung", "Floor-Standing"],
      },
      {
        id: "width",
        label: "What width?",
        type: "single",
        options: [
          "600mm",
          "750mm",
          "900mm",
          "1000mm",
          "1200mm",
          "1500mm",
          "1800mm",
          "Custom",
        ],
        customField: "customWidth",
        customPlaceholder: "Enter custom width (mm)",
      },
      {
        id: "customWidth",
        label: "Enter custom width (mm)",
        type: "text",
        placeholder: "e.g. 1350",
        inline: true,
        showIf: (a) => a.width === "Custom",
      },
      {
        id: "basinConfig",
        label: "Basin configuration",
        type: "single",
        options: ["Single Basin", "Double Basin"],
      },
    ],
  },
  {
    id: "basinMixer",
    number: "05",
    title: "Basin Mixer / Taps",
    image: `${CDN}/bathroom_gallery/Craigieburn+3.jpg`,
    questions: [
      {
        id: "configuration",
        label: "Basin tap configuration",
        type: "single",
        options: ["Basin Mixer", "Wall-Mounted Mixer", "Separate Taps"],
      },
      {
        id: "finish",
        label: "Finish",
        type: "single",
        options: FINISH_OPTIONS,
      },
    ],
  },
  {
    id: "mirror",
    number: "06",
    title: "Mirror",
    image: `${CDN}/bathroom_gallery/Bathroom+2.jpg`,
    questions: [
      {
        id: "type",
        label: "What type?",
        type: "single",
        options: ["Standard Mirror", "LED Mirror", "Mirrored Cabinet"],
      },
      {
        id: "width",
        label: "Width",
        type: "single",
        options: ["600", "750", "900", "1200", "Custom"],
        customField: "customWidth",
        customPlaceholder: "Enter custom width (mm)",
      },
      {
        id: "customWidth",
        label: "Enter custom width (mm)",
        type: "text",
        placeholder: "e.g. 850",
        inline: true,
        showIf: (a) => a.width === "Custom",
      },
    ],
  },
  {
    id: "toilet",
    number: "07",
    title: "Toilet",
    image: `${CDN}/bathroom_gallery/Bathroom+3.jpg`,
    questions: [
      {
        id: "type",
        label: "Toilet type",
        type: "single",
        options: ["Back-to-Wall", "Wall-Hung", "Other"],
      },
      {
        id: "rollHolder",
        label: "Do you require a toilet roll holder?",
        type: "yesNo",
      },
    ],
  },
  {
    id: "painting",
    number: "08",
    title: "Painting",
    image: `${CDN}/bathroom_gallery/Before+and+after+1.jpg`,
    questions: [
      {
        id: "what",
        label: "What requires painting?",
        type: "single",
        options: [
          "Ceiling Only",
          "Non-Tiled Walls",
          "Ceiling + Non-Tiled Walls",
          "Entire Bathroom",
        ],
      },
      {
        id: "colour",
        label: "Colour",
        type: "text",
        placeholder: "Enter preferred colour",
      },
    ],
  },
  {
    id: "exhaustFan",
    number: "09",
    title: "Exhaust Fan",
    image: `${CDN}/bathroom_gallery/Bathroom+1.jpg`,
    questions: [
      {
        id: "fanType",
        label: "Fan type",
        type: "single",
        options: [
          "Standard Exhaust",
          "Exhaust + Light",
          "Exhaust + Heat + Light",
        ],
      },
    ],
  },
  {
    id: "lighting",
    number: "10",
    title: "Lighting",
    image: `${CDN}/bathroom_gallery/Taylors+Hill+Bathroom+1.jpg`,
    questions: [
      {
        id: "downlights",
        label: "Number of downlights",
        type: "single",
        options: ["1", "2", "3", "4", "5", "6+"],
      },
      {
        id: "downlightsCount",
        label: "Number required",
        type: "text",
        placeholder: "Enter count",
        showIf: (a) => a.downlights === "6+",
      },
      {
        id: "downlightType",
        label: "Downlight type",
        type: "single",
        options: ["Basic", "Dimmable LED", "Recessed", "Other"],
      },
      {
        id: "additionalLighting",
        label: "Additional lighting?",
        type: "yesNo",
      },
      {
        id: "additionalTypes",
        label: "Additional lighting types",
        type: "multi",
        options: [
          "Mirror Lighting",
          "Vanity Lighting",
          "Shower Lighting",
          "Other",
        ],
        showIf: (a) => a.additionalLighting === "yes",
      },
    ],
  },
  {
    id: "electrical",
    number: "11",
    title: "Powerpoints / Electrical",
    image: `${CDN}/bathroom_gallery/IMG_1517.jpg`,
    questions: [
      {
        id: "changes",
        label: "What changes are required?",
        type: "multi",
        options: [
          "Add PowerPoint",
          "Move PowerPoint",
          "Add Heated Towel Rail",
          "Other",
        ],
      },
      {
        id: "powerpointCount",
        label: "How many powerpoints?",
        type: "single",
        options: ["1", "2", "3", "4+"],
        showIf: (a) =>
          (a.changes?.includes("Add PowerPoint") ||
            a.changes?.includes("Move PowerPoint")),
      },
      {
        id: "location1",
        label: "PowerPoint location 1",
        type: "text",
        showIf: (a) =>
          (a.changes?.includes("Add PowerPoint") ||
            a.changes?.includes("Move PowerPoint")) &&
          a.powerpointCount &&
          ["1", "2", "3", "4+"].includes(a.powerpointCount),
      },
      {
        id: "location2",
        label: "PowerPoint location 2",
        type: "text",
        showIf: (a) =>
          (a.changes?.includes("Add PowerPoint") ||
            a.changes?.includes("Move PowerPoint")) &&
          a.powerpointCount &&
          ["2", "3", "4+"].includes(a.powerpointCount),
      },
      {
        id: "location3",
        label: "PowerPoint location 3",
        type: "text",
        showIf: (a) =>
          (a.changes?.includes("Add PowerPoint") ||
            a.changes?.includes("Move PowerPoint")) &&
          a.powerpointCount &&
          ["3", "4+"].includes(a.powerpointCount),
      },
      {
        id: "location4",
        label: "PowerPoint location 4+",
        type: "text",
        showIf: (a) =>
          (a.changes?.includes("Add PowerPoint") ||
            a.changes?.includes("Move PowerPoint")) &&
          a.powerpointCount === "4+",
      },
    ],
  },
  {
    id: "other",
    number: "12",
    title: "Other Requirements",
    image: `${CDN}/bathroom_gallery/IMG_4249.jpg`,
    questions: [
      {
        id: "extras",
        label: "Anything else required?",
        type: "multi",
        options: [
          "Shower Seat",
          "Underfloor Heating",
          "Bidet",
          "Hand Towel Rail",
          "Additional Storage",
          "Other",
        ],
      },
      {
        id: "otherNotes",
        label: "Additional notes",
        type: "textarea",
        placeholder: "Any other requirements or notes",
      },
    ],
  },
];

export function getVisibleQuestions(category, answers = {}) {
  return category.questions.filter(
    (q) => !q.inline && (!q.showIf || q.showIf(answers)),
  );
}

export function formatAnswerValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value === "yes") return "Yes";
  if (value === "no") return "No";
  if (value === "noted") return "Noted";
  if (typeof value === "string" && /^https?:\/\//i.test(value)) {
    return "Photo uploaded";
  }
  return value || "—";
}
