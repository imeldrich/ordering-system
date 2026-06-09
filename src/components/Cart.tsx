import type { OrderItem } from "../types/types";

type CartProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  order: OrderItem[];
};

const Cart = ({ isOpen, setIsOpen, order }: CartProps) => {
  return (
    <div
      className={`fixed top-0 right-0 min-h-screen w-xl bg-white rounded-l-md z-50 transform transition-transform duration-300 flex flex-col ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 text-2xl text-black font-semibold"
      >
        ✕
      </button>

      <h3 className="text-2xl font-semibold p-5">Your Cart</h3>

      {order.length > 0 && (
        <p className="ml-5 text-lg font-semibold text-neutral-400">
          {order.length} {order.length === 1 ? " item" : " items"}
        </p>
      )}
    </div>
  );
};

export default Cart;
