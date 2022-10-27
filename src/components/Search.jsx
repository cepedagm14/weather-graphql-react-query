import React, { useState } from "react";
import { useClientGQL } from "../graphql/client";
import { GET_WEATHER_QUERY } from "../graphql/queries/UseWeather";

const Search = () => {
  const [getCity, setGetCity] = useState("");

  const { data, isLoading, refetch } = useClientGQL(
    ["weather"],
    GET_WEATHER_QUERY,
    {
      name: getCity,
    }
  );

  const handleChange = (e) => {
    setGetCity(e.target.value);
  };

  const handleClick = () => {
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  return (
    <>
      <div>
        <h3>Search</h3>
        <input
          type="text"
          value={getCity}
          placeholder="city name..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>Seacrh</button>
      </div>
      <div className="wheather">
        {data.getCityByName == null ? <div></div> : (
          <>
            <h1>{data.getCityByName.name}</h1>
            <h1>{data.getCityByName.weather.temperature.actual}</h1>
            <h1>{data.getCityByName.weather.summary.description}</h1>
            <h1>{data.getCityByName.weather.wind.speed}</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
