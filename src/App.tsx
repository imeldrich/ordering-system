import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import { products } from "./data/products";
import type { Product } from "./types/product";
import type { JSX } from "react";
import "./App.css";

const App = () => {
  return products.map((product: Product): JSX.Element => {
    return (
      <div>
        <Header/>
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      </div>
    );
  });
};

export default App;
