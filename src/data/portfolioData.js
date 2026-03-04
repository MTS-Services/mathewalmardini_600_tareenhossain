// Portfolio image data structure
// All paths are relative to the public folder

export const portfolioData = [
  // Bathroom Portfolio
  { id: 1, src: "/protfollio/bathroom/Bath.jpg", category: "bathroom" },
  { id: 2, src: "/protfollio/bathroom/Bathroom 2.jpg", category: "bathroom" },
  { id: 3, src: "/protfollio/bathroom/Bathroom 3.jpg", category: "bathroom" },
  { id: 4, src: "/protfollio/bathroom/Bathroom 4.jpg", category: "bathroom" },
  {
    id: 5,
    src: "/protfollio/bathroom/Before and after 1.jpg",
    category: "bathroom",
  },
  {
    id: 6,
    src: "/protfollio/bathroom/Before and after 2.jpg",
    category: "bathroom",
  },
  {
    id: 7,
    src: "/protfollio/bathroom/Before and after 3.jpg",
    category: "bathroom",
  },
  {
    id: 8,
    src: "/protfollio/bathroom/Craigieburn 1.jpg",
    category: "bathroom",
  },
  {
    id: 9,
    src: "/protfollio/bathroom/Craigieburn 2.jpg",
    category: "bathroom",
  },
  {
    id: 10,
    src: "/protfollio/bathroom/Craigieburn 3.jpg",
    category: "bathroom",
  },
  {
    id: 11,
    src: "/protfollio/bathroom/Craigieburn 4.jpg",
    category: "bathroom",
  },
  {
    id: 12,
    src: "/protfollio/bathroom/Craigieburn 5.jpg",
    category: "bathroom",
  },
  {
    id: 13,
    src: "/protfollio/bathroom/IMG_1530 (1).JPG",
    category: "bathroom",
  },
  { id: 14, src: "/protfollio/bathroom/IMG_1579.JPG", category: "bathroom" },
  { id: 15, src: "/protfollio/bathroom/IMG_4149.JPG", category: "bathroom" },
  { id: 16, src: "/protfollio/bathroom/IMG_4151.JPG", category: "bathroom" },
  { id: 17, src: "/protfollio/bathroom/IMG_4234.JPG", category: "bathroom" },
  { id: 18, src: "/protfollio/bathroom/IMG_4776.JPG", category: "bathroom" },
  { id: 19, src: "/protfollio/bathroom/IMG_6312.JPG", category: "bathroom" },
  { id: 20, src: "/protfollio/bathroom/IMG_9823.JPG", category: "bathroom" },
  { id: 21, src: "/protfollio/bathroom/Keynton 1.jpg", category: "bathroom" },
  {
    id: 22,
    src: "/protfollio/bathroom/Keynton before and after.jpg",
    category: "bathroom",
  },
  { id: 23, src: "/protfollio/bathroom/Photo1.png", category: "bathroom" },
  { id: 24, src: "/protfollio/bathroom/Photo2.png", category: "bathroom" },
  { id: 25, src: "/protfollio/bathroom/Photom.png", category: "bathroom" },
  { id: 26, src: "/protfollio/bathroom/sunbury 1.jpg", category: "bathroom" },
  { id: 27, src: "/protfollio/bathroom/Sunbury 3.jpg", category: "bathroom" },
  {
    id: 28,
    src: "/protfollio/bathroom/WhatsApp Image 2023-03-29 at 1.22.25 PM (1).jpeg",
    category: "bathroom",
  },
  {
    id: 29,
    src: "/protfollio/bathroom/WhatsApp Image 2023-03-29 at 1.22.26 PM.jpeg",
    category: "bathroom",
  },
  {
    id: 30,
    src: "/protfollio/bathroom/WhatsApp Image 2023-04-02 at 4.59.34 PM (1).jpeg",
    category: "bathroom",
  },
  {
    id: 31,
    src: "/protfollio/bathroom/WhatsApp Image 2024-05-15 at 11.02.24_b285cd97.jpg",
    category: "bathroom",
  },
  {
    id: 32,
    src: "/protfollio/bathroom/WhatsApp Image 2024-05-15 at 11.02.25_eeb10c71.jpg",
    category: "bathroom",
  },
  {
    id: 33,
    src: "/protfollio/bathroom/WhatsApp Image 2024-05-15 at 11.02.25_f0082713.jpg",
    category: "bathroom",
  },

  // Kitchen Portfolio
  { id: 34, src: "/protfollio/kitchen/kitchen .jpg", category: "kitchen" },
  {
    id: 35,
    src: "/protfollio/kitchen/Kitchen_Sunbury_1.jpg",
    category: "kitchen",
  },
  {
    id: 36,
    src: "/protfollio/kitchen/Kitchen_Sunbury_2.jpg",
    category: "kitchen",
  },
  { id: 37, src: "/protfollio/kitchen/Photo3.JPG", category: "kitchen" },
  { id: 38, src: "/protfollio/kitchen/Photo7.png", category: "kitchen" },

  // Laundry Portfolio
  { id: 40, src: "/protfollio/laundry/Laundry.jpeg", category: "laundry" },
  { id: 41, src: "/protfollio/laundry/Our Laundry 1.jpg", category: "laundry" },
  { id: 42, src: "/protfollio/laundry/Our Laundry 2.jpg", category: "laundry" },
  { id: 43, src: "/protfollio/laundry/Our Laundry 3.jpg", category: "laundry" },
  { id: 44, src: "/protfollio/laundry/Our Laundry 4.jpg", category: "laundry" },
  { id: 45, src: "/protfollio/laundry/Our Laundry 5.jpg", category: "laundry" },
  {
    id: 46,
    src: "/protfollio/laundry/Taylors Hill Laundry 2 .jpg",
    category: "laundry",
  },
  {
    id: 47,
    src: "/protfollio/laundry/Taylors Hill Laundry.jpg",
    category: "laundry",
  },
];

// Helper function to get images by category
export const getImagesByCategory = (category) => {
  return portfolioData.filter((image) => image.category === category);
};

// Helper function to get all images
export const getAllImages = () => {
  return portfolioData;
};
