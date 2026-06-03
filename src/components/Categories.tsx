import { categories } from "../data/categories";
import type { Category } from "../types/types";

type CategoriesProps = {
  selectedCategory: Category["name"];
  setSelectedCategory: (value: Category["name"]) => void;
};

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <ul className="space-y-5">
      {categories.map((category: Category) => {
        const Icon = category.icon;
        return (
          <li key={category.name} className="w-40 rounded-md">
            <button
              onClick={() => setSelectedCategory(category.name)}
              className={`text-lg flex items-center gap-4 p-3 w-full rounded-md shadow-sm transition-colors cursor-pointer
                ${
                  selectedCategory === category.name
                    ? "bg-primary text-white"
                    : "bg-amber-200 hover:bg-amber-100"
                }`}
            >
              <Icon />
              <span>{category.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
