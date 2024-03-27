import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, cuisines, avgRating, costForTwo, locality, name } =
    resList?.info;
  const firstFiveCuisines = cuisines.slice(0, 5);
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{firstFiveCuisines.join(", ")}</p>
      <p>{avgRating} STARS</p>
      <h4>{costForTwo}</h4>
      <p>Locality: {locality} </p>
    </div>
  );
};
export default RestaurantCard;
