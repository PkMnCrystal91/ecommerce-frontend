import ReactDOM from "react-dom/client";
import { Shop } from "./Shop.jsx";
import "./index.css";
import { ShopContextProvider } from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <Shop />
  </ShopContextProvider>
);
