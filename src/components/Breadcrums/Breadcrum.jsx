import "./Breadcrum.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

export const Breadcrum = ({ product }) => {
  const { category, name } = product;
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {category} <img src={arrow_icon} alt="" /> {name}
    </div>
  );
};
