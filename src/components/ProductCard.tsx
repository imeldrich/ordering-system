import type { Product, OrderItem } from "../types/types";
import { toast } from "react-toastify";

type ProductCardProps = {
  product: Product;
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

const ProductCard = ({ product, order, setOrder }: ProductCardProps) => {
  const handleOrder = () => {
    const existingOrder = order.find(
      (item: OrderItem) => item.product.id === product.id,
    );

    if (existingOrder) {
      setOrder((prevOrder: OrderItem[]) =>
        prevOrder.map((order: OrderItem) =>
          order.product.id === product.id
            ? { ...order, quantity: order.quantity + 1 }
            : order,
        ),
      );
      toast.info("This item is already in your cart", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          width: "500px",
        },
      });
      return;
    }

    setOrder((prevOrder: OrderItem[]) => [
      ...prevOrder,
      { product, quantity: 1 },
    ]);
    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        width: "500px",
      },
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
