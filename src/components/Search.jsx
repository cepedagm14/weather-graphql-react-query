import React, { useState } from "react";
import { useClientGQL } from "../graphql/client";
import { GET_WEATHER_QUERY } from "../graphql/queries/UseWeather";

const Search = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading } = useClientGQL(["weather"], GET_WEATHER_QUERY, {
    name: search,
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;
  console.log(search);
  return (
    <div>
      <h3>Search</h3>
      <input
        type="text"
        value={search}
        placeholder="city name..."
        onChange={handleChange}
      />
      <button>Seacrh</button>

      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default Search;
