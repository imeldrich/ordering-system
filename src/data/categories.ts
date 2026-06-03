import type { Category } from "../types/types";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { PiHamburger } from "react-icons/pi";
import { RiDrinks2Line } from "react-icons/ri";
import { LuDessert } from "react-icons/lu";

const categories: Category[] = [
  {
    name: "All",
    icon: TfiLayoutGrid2,
  },
  {
    name: "Burgers",
    icon: PiHamburger,
  },
  {
    name: "Drinks",
    icon: RiDrinks2Line,
  },
  {
    name: "Desserts",
    icon: LuDessert,
  },
];

export { categories };
