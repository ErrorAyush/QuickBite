import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  return restaurants.filter((props) =>
    props.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  useEffect(() => {
    // API call
    getData();
  }, []);

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Type to search.."
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const filteredData = filterData(searchText, allRestaurants);
              setFilteredRestaurants(filteredData);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((cardProp) => {
          return <RestaurantCard {...cardProp.info} key={cardProp.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
