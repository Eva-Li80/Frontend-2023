export type Pizza = {
  id: string;
  type: "pizza" | "kebab" | "vego";
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
