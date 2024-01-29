import { useContext } from "react";
import { Breadcrum } from "../components/index";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
};
