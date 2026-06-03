import type { IconType } from "react-icons";

type Category = {
  name: "All" | "Burgers" | "Drinks" | "Desserts";
  icon: IconType;
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category["name"];
};

export type { Category, Product };
