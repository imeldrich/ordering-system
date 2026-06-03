import type { Product } from "../types/types";

const products: Product[] = [
  {
    id: 1,
    name: "Classic Burger",
    price: 120,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: 150,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    category: "Burgers",
  },
  {
    id: 3,
    name: "Double Patty Burger",
    price: 180,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    category: "Burgers",
  },
  {
    id: 4,
    name: "Iced Coffee",
    price: 95,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
    category: "Drinks",
  },
  {
    id: 5,
    name: "Milk Tea",
    price: 110,
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8",
    category: "Drinks",
  },
  {
    id: 6,
    name: "Strawberry Smoothie",
    price: 130,
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
    category: "Drinks",
  },
  {
    id: 7,
    name: "Chocolate Donut",
    price: 65,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    category: "Desserts",
  },
  {
    id: 8,
    name: "Blueberry Cheesecake",
    price: 140,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    category: "Desserts",
  },
];

export { products };
