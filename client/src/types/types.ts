import type { IconType } from "react-icons";

type Category = {
  name: "All" | "Burgers" | "Drinks" | "Desserts";
  icon: IconType;
};

type Product = {
  _id: string
  name: string;
  price: number;
  image: string;
  category: Category["name"];
};

type OrderItem = {
  product: Product
  quantity: number
}

export type { Category, Product, OrderItem };
