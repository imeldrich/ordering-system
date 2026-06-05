import type { Product, OrderItem } from "../types/types";

type ProductCardProps = {
  product: Product;
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

const ProductCard = ({ product, setOrder }: ProductCardProps) => {
  const handleOrder = () => {
    setOrder((prevOrder: OrderItem[]) => {
      const existingOrder = prevOrder.find(
        (order) => order.product.id === product.id,
      );

      if (existingOrder) {
        return prevOrder.map((order) =>
          order.product.id === product.id
            ? { ...order, quantity: order.quantity + 1 }
            : order,
        );
      }
      return [...prevOrder, { product, quantity: 1 }];
    });
  };

  return (
    <div className="bg-white w-full max-w-xs rounded-2xl shadow-md overflow-hidden space-y-2 hover:scale-105 transition-transform duration-200 ease-in-out">
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
        <button
          onClick={handleOrder}
          className="bg-primary px-5 py-3 shadow-md rounded-md text-white font-bold cursor-pointer"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
