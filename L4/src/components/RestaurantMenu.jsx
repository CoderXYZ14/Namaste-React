import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    //console.log(resInfo?.cards[2]?.card?.card?.info.name);
  };
  const name = resInfo?.cards[2]?.card?.card?.info.name;
  const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
  const costForTwo = resInfo?.cards[2]?.card?.card?.info.costForTwoMessage;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(itemCards);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
        {/* <li>Biryani</li>
        <li>Burgers</li> */}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
