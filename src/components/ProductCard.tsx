import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white w-full max-w-xs rounded-2xl shadow-md overflow-hidden space-y-2 hover:scale-105 transition-transform">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className=" p-5 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700 font-medium">₱{product.price}</p>
        </div>
        <button className="bg-primary px-5 py-3 shadow-md rounded-md text-white font-bold">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
