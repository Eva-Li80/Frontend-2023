export type Pizza = {
  id: string;
  category: "pizza" | "sallad" | "vego";
  name: string;
  ingredients: string[];
  price: number;
  size: "standard" | "barn" | "familj";
};

export type CartItem = {
  id: string;
  product: Pizza;
  quantity: number;
};

export const extraIngredients = [
  "Tomat",
  "Gurka",
  "Lök",
  "Ost",
  "Fetaost",
  "Ruccola",
  "Räkor",
  "Pommes",
  "Feferoni",
];

export const sizes = ["standard", "barn", "familj"];

export const pizzas: Pizza[] = [
  {
    id: "1",
    category: "pizza",
    name: "Margherita",
    ingredients: ["tomatsås", "mozzarella", "basilika"],
    price: 85,
    size: "standard",
  },
  {
    id: "2",
    category: "pizza",
    name: "Capricciosa",
    ingredients: ["tomatsås", "mozzarella", "skinka", "champinjoner", "oliver"],
    price: 95,
    size: "standard",
  },
  {
    id: "3",
    category: "pizza",
    name: "Quattro Stagioni",
    ingredients: [
      "tomatsås",
      "mozzarella",
      "skinka",
      "champinjoner",
      "räkor",
      "artiskocka",
      "oliver",
    ],
    price: 105,
    size: "standard",
  },
  {
    id: "4",
    category: "pizza",
    name: "Caprese",
    ingredients: ["tomatsås", "mozzarella", "tomater", "basilika", "olivolja"],
    price: 90,
    size: "standard",
  },
  {
    id: "5",
    category: "pizza",
    name: "Pepperoni",
    ingredients: ["tomatsås", "mozzarella", "pepperoni"],
    price: 95,
    size: "standard",
  },
  {
    id: "6",
    category: "vego",
    name: "Vegetariana",
    ingredients: [
      "tomatsås",
      "mozzarella",
      "paprika",
      "champinjoner",
      "lök",
      "oliver",
    ],
    price: 90,
    size: "standard",
  },
  {
    id: "7",
    category: "vego",
    name: "Margarita Vegana",
    ingredients: ["tomatsås", "vegansk ost", "basilika"],
    price: 95,
    size: "standard",
  },
  {
    id: "8",
    category: "vego",
    name: "Quattro Formaggi",
    ingredients: [
      "tomatsås",
      "mozzarella",
      "gorgonzola",
      "parmesan",
      "cheddar",
    ],
    price: 100,
    size: "standard",
  },
  {
    id: "9",
    category: "vego",
    name: "Funghi",
    ingredients: ["tomatsås", "mozzarella", "champinjoner"],
    price: 85,
    size: "standard",
  },
  {
    id: "10",
    category: "vego",
    name: "Hawaiian Veggie",
    ingredients: ["tomatsås", "mozzarella", "ananas", "paprika"],
    price: 95,
    size: "standard",
  },
  {
    id: "11",
    category: "sallad",
    name: "Caesarsallad",
    ingredients: [
      "salladsblandning",
      "kyckling",
      "krutonger",
      "parmesan",
      "Caesardressing",
    ],
    price: 80,
    size: "standard",
  },
  {
    id: "12",
    category: "sallad",
    name: "Grekisk Sallad",
    ingredients: [
      "salladsblandning",
      "tomater",
      "gurka",
      "oliver",
      "fetaost",
      "rödlök",
    ],
    price: 80,
    size: "standard",
  },
  {
    id: "13",
    category: "sallad",
    name: "Caprese Sallad",
    ingredients: ["tomater", "mozzarella", "basilika", "olivolja"],
    price: 80,
    size: "standard",
  },
  {
    id: "14",
    category: "sallad",
    name: "Pastasallad",
    ingredients: [
      "pasta",
      "körsbärstomater",
      "rödlök",
      "oliver",
      "fetaost",
      "basilika",
      "olivolja",
    ],
    price: 80,
    size: "standard",
  },
  {
    id: "15",
    category: "sallad",
    name: "Avokado- och Räksallad",
    ingredients: [
      "avokado",
      "räkor",
      "salladsblandning",
      "tomater",
      "gurka",
      "rödlök",
      "limedressing",
    ],
    price: 80,
    size: "standard",
  },
];
