import type { Product } from "../types/product";

type ProductCardProps = Pick<Product, "name" | "price">;

const ProductCard = ({ name, price }: ProductCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{price}</h3>
    </div>
  );
};

export default ProductCard;
