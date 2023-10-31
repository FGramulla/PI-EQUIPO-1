import mockCategories from "../../mocks/categories.json";
import { CategoriesWrapper } from "./categories.style";
import Card from "./modules/Card";

const Categories = () => {
  return (
    <CategoriesWrapper>
      {mockCategories.map((category, index) => (
        <Card category={category} key={index} />
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;
