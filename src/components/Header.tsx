import logo from "../assets/logo.png";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import type { OrderItem } from "../types/types";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
  order: OrderItem[];
};

const Header = ({ search, setSearch, order }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2.5">
        <img src={logo} alt="hamburger logo" className="h-10" />
        <h1 className="text-primary text-2xl font-bold">Yummy</h1>
      </div>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          name="search"
          className="w-full h-10 bg-white pl-3 pr-10 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search for food or drinks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="relative">
          <BsCart3 className="text-2xl mr-4" />
          <span className="absolute -top-2 right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {order.length}
          </span>
        </div>
        <FaUserCircle className="text-2xl" />
        <select name="user">
          <option>John Doe</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
