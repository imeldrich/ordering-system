import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { products } from "./data/products";
import type { Product } from "./types/product";
import "./App.css";

const App = () => {
  return (
    <div className="space-y-3 select-none">
      <div className="border-b border-gray-300">
        <Header />
      </div>
      <div className="grid grid-cols-[160px_1fr] gap-4">
        <Categories/>
        <div className="grid grid-cols-4 gap-5 p-4">
          <div className="col-span-full">
            <h3 className="font-bold">All Menu</h3>
            <p>Delicious food for you</p>
          </div>
          {products.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
