import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { products } from "./data/products";
import type { Product, Category, OrderItem } from "./types/types";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category["name"]>("All");

  const [search, setSearch] = useState<string>("");
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [product, setProduct] = useState<Product[]>(products);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProduct(
        products.filter((product: Product) => {
          const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;

          const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

          return matchesCategory && matchesSearch;
        }),
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, selectedCategory]);

  return (
    <div className="select-none">
      <div className="border-b border-gray-300">
        <Header search={search} setSearch={setSearch} order={order} />
      </div>
      <div className="grid grid-cols-[220px_1fr] h-screen">
        <div className="space-y-2 p-3 border-r border-gray-300">
          <p className="text-md text-neutral-400 font-semibold">CATEGORIES</p>
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="grid grid-cols-4 gap-5 p-4 self-start">
          <div className="col-span-full">
            <h3 className="font-bold text-2xl">All Menu</h3>
            <p className="text-lg">Delicious food for you</p>
          </div>
          {product.length ? (
            product.map((product: Product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  order={order}
                  setOrder={setOrder}
                />
              );
            })
          ) : (
            <div className="col-span-full flex items-center justify-center">
              <p className="text-lg text-neutral-400">Product not found...</p>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
