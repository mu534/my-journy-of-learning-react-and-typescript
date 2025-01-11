import { useEffect, useState } from "react";
import categories from "../expence-tracker/categories";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["clothing", "Househld"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
