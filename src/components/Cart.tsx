import type { OrderItem } from "../types/types";
import CartOrder from "./CartOrder";

type CartProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
};

const Cart = ({ isOpen, setIsOpen, order, setOrder }: CartProps) => {
  const grandTotal = order.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-xl bg-white rounded-l-md z-50 transform transition-transform duration-300 flex flex-col px-2 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-9 text-2xl text-black font-semibold"
      >
        ✕
      </button>

      <div className="px-5 py-2">
        <h3 className="text-3xl font-bold p-5">Your Cart</h3>

        <p className="ml-5 text-lg font-semibold text-neutral-400">
          {order.length} {order.length <= 1 ? " item" : " items"}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {order.length > 0 ? (
          <div className="flex flex-col justify-center">
            <CartOrder order={order} setOrder={setOrder} />
            <div className="flex items-center justify-around py-5 border-b border-gray-300">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-xl text-primary font-semibold">
                ₱{grandTotal.toLocaleString()}.00
              </p>
            </div>
            <div className="w-full px-5 py-8">
              <button className="w-full bg-primary hover:bg-orange-400 text-white text-lg py-3 font-semibold rounded-2xl shadow-md tracking-wide cursor-pointer active:scale-98 transition-transform">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-5">
            <p className="text-lg font-semibold text-neutral-400">
              Your Cart is Empty
            </p>
            <button  onClick={() => setIsOpen(false)} className="bg-primary hover:bg-orange-400 px-14 py-3 shadow-md rounded-2xl text-lg text-white font-bold cursor-pointer active:scale-98 transition-transform tracking-wide">Start Ordering</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
