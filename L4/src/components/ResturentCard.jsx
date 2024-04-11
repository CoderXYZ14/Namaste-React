import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, cuisines, avgRating, costForTwo, locality, name } =
    resList?.info;
  const firstFiveCuisines = cuisines.slice(0, 5);
  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200"
      //style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{firstFiveCuisines.join(", ")}</p>
      <p>{avgRating} STARS</p>
      <h4>{costForTwo}</h4>
      <p>Locality: {locality} </p>
    </div>
  );
};
export default RestaurantCard;
