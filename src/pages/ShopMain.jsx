import { Hero, NewCollections, Offers, Popular } from "../components";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";

export const ShopMain = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};
