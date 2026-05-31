import { categories } from "../data/categories";
import type { Category } from "../types/category";

const Categories = () => {
  return (
    <ul className="space-y-2">
      {categories.map((category: Category) => {
        const Icon = category.icon;
        return (
          <li key={category.name} className="bg-amber-200 hover:bg-amber-100 transition-colors w-40 rounded-sm">
            <button className="text-lg flex items-center gap-4 p-3 w-full cursor-pointer">
              <Icon/>
              <span>{category.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
