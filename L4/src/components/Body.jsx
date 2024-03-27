import RestaurantCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    console.log(json);

    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Loader which is shown till api called
  //also called Conditional Rendering
  // if (resData.length === 0) {
  // return <h1>Loading...</h1>;
  //   return <Shimmer />;
  // }
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box"></input>
          <button>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resData.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setResData(filteredList);
          }}
        >
          Top Rated Resturent
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
