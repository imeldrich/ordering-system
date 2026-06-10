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
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
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
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
      style: {
        width: "500px",
      },
    });
  };

  return (
    <div className="bg-white w-full max-w-xs rounded-2xl shadow-md overflow-hidden space-y-2 hover:scale-98 transition-transform duration-200 ease-in-out">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-5 flex flex-col space-y-3">
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-lg text-primary font-medium tracking-wider">
            ₱{product.price}.00
          </p>
        </div>
        <button
          onClick={handleOrder}
          className="bg-primary hover:bg-orange-400 px-5 py-3 shadow-md rounded-2xl text-white font-bold cursor-pointer active:scale-98 transition-transform"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
