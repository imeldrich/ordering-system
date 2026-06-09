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
          <li key={category.name} className="w-full">
            <button
              onClick={() => setSelectedCategory(category.name)}
              className={`text-xl flex items-center gap-4 p-4 w-full rounded-md shadow-sm transition-colors cursor-pointer
                ${
                  selectedCategory === category.name
                    ? "bg-amber-200 text-primary font-semibold"
                    : "bg-neutral-200 hover:bg-neutral-100"
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
