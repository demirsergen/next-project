import React, { useState } from "react";
import Search from "../components/search";
import Results from "./results";

const Homepage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const container = "w-full mx-auto flex ";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOST,
    },
  };

  const fetchData = async (form) => {
    const { city, state, category, sortBy, bedroomCount } = form;

    const url = `https://realty-in-us.p.rapidapi.com/properties/v2/${category}?city=${city}&state_code=${state.toUpperCase()}&limit=200&offset=0&sort=${sortBy}&beds_min=${bedroomCount}`;

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    setSearchResults(data.properties);
  };

  return (
    <div className={`${container}`}>
      <Search fetchData={fetchData} />
      <Results results={searchResults} />
    </div>
  );
};

export default Homepage;
