export type Pizza = {
  id: string;
  type: "pizza" | "sallad" | "vego";
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

export const pizzas: Pizza[] = [
  {
    id: "1",
    type: "pizza",
    name: "Margherita",
    ingredients: ["tomatsås", "mozzarella", "basilika"],
    price: 85,
    size: "standard",
  },
  {
    id: "2",
    type: "pizza",
    name: "Capricciosa",
    ingredients: ["tomatsås", "mozzarella", "skinka", "champinjoner", "oliver"],
    price: 95,
    size: "standard",
  },
  {
    id: "3",
    type: "pizza",
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
    type: "pizza",
    name: "Caprese",
    ingredients: ["tomatsås", "mozzarella", "tomater", "basilika", "olivolja"],
    price: 90,
    size: "standard",
  },
  {
    id: "5",
    type: "pizza",
    name: "Pepperoni",
    ingredients: ["tomatsås", "mozzarella", "pepperoni"],
    price: 95,
    size: "standard",
  },
  {
    id: "6",
    type: "vego",
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
    type: "vego",
    name: "Margarita Vegana",
    ingredients: ["tomatsås", "vegansk ost", "basilika"],
    price: 95,
    size: "standard",
  },
  {
    id: "8",
    type: "vego",
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
    type: "vego",
    name: "Funghi",
    ingredients: ["tomatsås", "mozzarella", "champinjoner"],
    price: 85,
    size: "standard",
  },
  {
    id: "10",
    type: "vego",
    name: "Hawaiian Veggie",
    ingredients: ["tomatsås", "mozzarella", "ananas", "paprika"],
    price: 95,
    size: "standard",
  },
  {
    id: "11",
    type: "sallad",
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
    type: "sallad",
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
    type: "sallad",
    name: "Caprese Sallad",
    ingredients: ["tomater", "mozzarella", "basilika", "olivolja"],
    price: 80,
    size: "standard",
  },
  {
    id: "14",
    type: "sallad",
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
    type: "sallad",
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
