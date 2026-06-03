import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { products } from "./data/products";
import type { Product, Category } from "./types/types";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category["name"]>("All");

  const filteredProducts: Product[] =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product: Product) => product.category === selectedCategory,
        );

  return (
    <div className="space-y-3 select-none">
      <div className="border-b border-gray-300">
        <Header />
      </div>
      <div className="grid grid-cols-[160px_1fr] gap-4">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-4 gap-5 p-4">
          <div className="col-span-full">
            <h3 className="font-bold">All Menu</h3>
            <p>Delicious food for you</p>
          </div>
          {filteredProducts.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
