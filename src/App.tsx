import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Categories from "./components/Categories";
import { products } from "./data/products";
import type { Product } from "./types/product";
import "./App.css";

const App = () => {
  return (
    <div className="space-y-3">
      <div className="border-b border-gray-300">
        <Header />
      </div>
      <div className="grid grid-cols-2">
        <Categories />
        <div>
          <h3>All Menu</h3>
          <p>Delicious food for you</p>
          {products.map((product: Product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
