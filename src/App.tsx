import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { products } from "./data/products";
import type { Product, Category, OrderItem } from "./types/types";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category["name"]>("All");

  const [search, setSearch] = useState<string>("");
  const [order, setOrder] = useState<OrderItem[]>([]);


  const filteredProducts: Product[] = products.filter((product: Product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-3 select-none">
      <div className="border-b border-gray-300">
        <Header search={search} setSearch={setSearch} order={order}/>
      </div>
      <div className="grid grid-cols-[160px_1fr] gap-4">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-4 gap-5 p-4">
          <div className="col-span-full">
            <h3 className="font-bold text-lg">All Menu</h3>
            <p>Delicious food for you</p>
          </div>
          {filteredProducts.length ? (
            filteredProducts.map((product: Product) => {
              return <ProductCard key={product.id} product={product} setOrder={setOrder}/>;
            })
          ) : (
            <div className="col-span-full flex items-center justify-center">
              <p className="text-lg text-gray-600">Product not found...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
