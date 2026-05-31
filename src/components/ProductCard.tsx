import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ProductCard;
