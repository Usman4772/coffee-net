export const site = {
  name: "Koffee Net",
  tagline: "Love. Life. Food.",
  facebookAbout:
    "A modern contemporary cafe serving the city's most delicious & delightful food & drinks.",
  instagramBio:
    "A modern contemporary restaurant situated at the city's most luxurious venue.",
  address: "Union Gold Mall, Rooftop, F-7, Islamabad",
  postal: "44000",
  mapsQuery: "33.72296562,73.05950000",
  mapsEmbed:
    "https://www.google.com/maps?q=33.72296562,73.05950000&z=16&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=33.72296562,73.05950000",
  phones: [
    { label: "051 8434107", href: "tel:+92518434107" },
    { label: "0304 5546666", href: "tel:+923045546666" },
  ],
  whatsapp: "https://wa.me/923045546666?text=Hi%20Koffee%20Net%2C%20I%27d%20like%20to%20reserve%20a%20table.",
  facebook: "https://www.facebook.com/koffeenet/",
  instagram: "https://www.instagram.com/koffeenet/",
  facebookFollowers: "28K",
  facebookRecommend: "88% recommend",
  facebookReviewCount: "499",
  services: ["Dine-in", "In-store pickup", "Reservations"],
} as const;

export const buffet = {
  title: "Hi-Tea & Dinner Buffet",
  hours: "7 PM – 9 PM",
  price: "Rs. 1,799 + tax",
  kids: "5 to 8 years: Rs. 899",
  note: "Terms and conditions apply.",
  categories: [
    {
      name: "Starter",
      items: [
        "Chana Chaat",
        "Dahi Bhallay",
        "Shami",
        "Burger / Assorted Sandwich",
        "Gol Gappay",
        "Assorted Chutneys",
      ],
    },
    {
      name: "Main Course",
      items: [
        "Chicken Biryani / Pulao",
        "Chicken Karahi",
        "Chicken Chilli Dry",
        "Chicken Tikka Boti / Reshmi Kebab",
        "Chicken Wings",
        "Mixed Vegetables / Daal",
        "Fried Rice",
        "Chowmein",
        "Naan & Roti",
      ],
    },
    {
      name: "Salad",
      items: [
        "Russian Salad",
        "Green Salad",
        "Fruit Salad",
        "Apple Cabbage Salad",
      ],
    },
    {
      name: "Drinks",
      items: ["Tea", "Green Tea", "Mint Margarita (or Fresh Lemonade)"],
    },
    {
      name: "Desserts",
      items: [
        "Kheer",
        "Fruit Truffle",
        "Chocolate Mousse",
        "Date Pastry",
        "Vanilla Pastry",
      ],
    },
  ],
} as const;

export type SignatureItem = {
  name: string;
  description: string;
  image: string;
  caption?: string;
};

export const signatures: SignatureItem[] = [
  {
    name: "Coffee",
    description: "Their own words: Hello. Must try.",
    image: "/images/coffee.png",
    caption: "Must try",
  },
  {
    name: "Pasta",
    description: "Plated pasta from the Koffee Net kitchen.",
    image: "/images/pasta.png",
  },
  {
    name: "Pizza",
    description: "Photographed as Super Delicious — a cheese pull from their table.",
    image: "/images/pizza-pull.png",
    caption: "Super delicious",
  },
  {
    name: "Burger",
    description: "Flavorful & juicy, as they caption it.",
    image: "/images/burger.png",
  },
  {
    name: "Sizzling Shrimp",
    description: "Fresh veggies, perfect rice — their plating, their line.",
    image: "/images/shrimp-plate.png",
  },
  {
    name: "Milk Cake",
    description: "Fresh, soft, and full of flavor.",
    image: "/images/milk-cake.png",
  },
  {
    name: "Lotus Cake",
    description: "Biscuit-topped cake from their dessert photography.",
    image: "/images/lotus-cake.png",
  },
  {
    name: "Layer Cake",
    description: "Happiness comes in layers.",
    image: "/images/red-velvet.png",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Food" | "Coffee" | "Dessert" | "Drinks" | "Rooftop";
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/rooftop-shisha.png",
    alt: "Rooftop table with Margalla Hills view at Koffee Net",
    category: "Rooftop",
  },
  {
    src: "/images/coffee.png",
    alt: "Latte in a yellow cup with cake at Koffee Net",
    category: "Coffee",
  },
  {
    src: "/images/pizza-pull.png",
    alt: "Cheese pull pizza at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/pasta-detail.png",
    alt: "Close-up of pasta at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/shrimp-fork.png",
    alt: "Shrimp on a fork at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/milk-cake.png",
    alt: "Milk cake at Koffee Net",
    category: "Dessert",
  },
  {
    src: "/images/burger-crispy.png",
    alt: "Crispy burger with fries at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/summer-drink.png",
    alt: "Purple summer drink at Koffee Net",
    category: "Drinks",
  },
  {
    src: "/images/lotus-cake.png",
    alt: "Lotus cake at Koffee Net",
    category: "Dessert",
  },
  {
    src: "/images/chicken-peanut.png",
    alt: "Chicken and fried rice plated at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/citrus-drink.png",
    alt: "Citrus drink with ice at Koffee Net",
    category: "Drinks",
  },
  {
    src: "/images/pizza-cheese.jpg",
    alt: "Cheese lover pizza at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/red-velvet.png",
    alt: "Layered cake slice at Koffee Net",
    category: "Dessert",
  },
  {
    src: "/images/shrimp-close.png",
    alt: "Sizzling shrimp close-up at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/stir-fry.jpg",
    alt: "Stir-fry with rice at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/pizza-close.png",
    alt: "Wood-fired style pizza at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/burger.png",
    alt: "Sesame burger at Koffee Net",
    category: "Food",
  },
  {
    src: "/images/pasta.png",
    alt: "Pasta on a blue plate at Koffee Net",
    category: "Food",
  },
];

export const socialGrid = [
  { src: "/images/pizza-cheese.jpg", alt: "Pizza from Koffee Net" },
  { src: "/images/coffee.png", alt: "Coffee from Koffee Net" },
  { src: "/images/rooftop-shisha.png", alt: "Rooftop at Koffee Net" },
  { src: "/images/lotus-cake.png", alt: "Lotus cake from Koffee Net" },
  { src: "/images/shrimp-plate.png", alt: "Shrimp from Koffee Net" },
  { src: "/images/summer-drink.png", alt: "Summer drink from Koffee Net" },
] as const;

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export const experiences = [
  {
    title: "Margalla rooftop",
    text: "Their own photography frames the table against the Margalla Hills — shisha, drinks, and open air above F-7.",
    image: "/images/rooftop-shisha.png",
  },
  {
    title: "Hi-tea & dinner buffet",
    text: "A set buffet from 7 PM to 9 PM: desi starters, mains, salads, tea, and a dessert table. Rs. 1,799 + tax.",
    image: "/images/menu-buffet.png",
  },
  {
    title: "Coffee and cake",
    text: "They still lead with coffee — Hello, must try — and a dessert counter they photograph constantly.",
    image: "/images/coffee.png",
  },
  {
    title: "A full kitchen",
    text: "Pizza, pasta, burgers, shrimp, and plated chicken — café energy with restaurant plates.",
    image: "/images/pizza-board.png",
  },
] as const;
