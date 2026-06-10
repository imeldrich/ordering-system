import type { OrderItem } from "../types/types";
import { RiDeleteBin6Line } from "react-icons/ri";

type CartOrderProps = {
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

const CartOrder = ({ order, setOrder }: CartOrderProps) => {
  const handleDelete = (itemId: number) => {
    const filteredOrder = order.filter(
      (item: OrderItem) => item.product.id !== itemId,
    );
    setOrder(filteredOrder);
  };

  const incrementQuantity = (itemId: number) => {
    setOrder((prevItem: OrderItem[]) => {
      return prevItem.map((item: OrderItem) => {
        if (item.product.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
    });
  };

  const decrementQuantity = (itemId: number) => {
    setOrder((prevItem: OrderItem[]) => {
      return prevItem
        .map((item: OrderItem) => {
          if (item.product.id === itemId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        })
        .filter((item: OrderItem) => item.quantity > 0);
    });
  };

  return (
    <div>
      {order.map((item: OrderItem) => {
        return (
          <div
            key={item.product.id}
            className="relative flex items-center p-5 border-b border-gray-300 mt-2"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-30 h-30 rounded-2xl mx-5"
            />
            <div className="self-start space-y-3">
              <div>
                <h3 className="text-xl font-semibold">{item.product.name}</h3>
                <p className="text-primary text-lg font-semibold">
                  ₱{item.product.price * item.quantity}.00
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className={`w-10 h-10 hover:bg-gray-50 transition-colors border-2 border-gray-200 text-lg rounded-lg shadow-xs ${
                    item.quantity === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={item.quantity === 1}
                  onClick={() => decrementQuantity(item.product.id)}
                >
                  -
                </button>

                <div className="w-14 h-10 flex items-center justify-center text-lg border-2 border-gray-200 rounded-lg shadow-xs">
                  {item.quantity}
                </div>

                <button
                  className="w-10 h-10 hover:bg-gray-50 transition-colors border-2 border-gray-200 text-lg rounded-lg cursor-pointer shadow-xs"
                  onClick={() => incrementQuantity(item.product.id)}
                >
                  +
                </button>
              </div>
            </div>
            <RiDeleteBin6Line
              className="absolute top-5 right-9 text-2xl cursor-pointer hover:text-red-600 transition-colors"
              onClick={() => handleDelete(item.product.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CartOrder;
