import { Item } from "../index";
import new_collection from "../assets/new_collections";

import "./NewCollections.css";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
