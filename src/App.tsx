import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("default");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredProducts: Product[] = products.filter(
        (product: Product) => {
          const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;

          const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

          return matchesCategory && matchesSearch;
        },
      );

      if (sortBy === "lowToHigh") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "highToLow") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
      setProduct(filteredProducts);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="select-none">
      <div className="border-b border-gray-300">
        <Header
          search={search}
          setSearch={setSearch}
          order={order}
          setIsOpen={setIsOpen}
        />
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
          <div className="col-span-full flex items-center justify-between px-2">
            <div>
              <h3 className="font-bold text-2xl">All Menu</h3>
              <p className="text-lg">Delicious food for you</p>
            </div>
            <div className="space-x-2">
              <label htmlFor="sort" className="font-semibold">Price:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
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
      <Cart
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        order={order}
        setOrder={setOrder}
      />
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
