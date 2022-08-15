import React from "react";
import Search from "../components/search";

const Homepage = () => {
  const container = "w-full mx-auto ";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.X_RAPID_API_HOST,
    },
  };

  const fetchData = async (form) => {
    console.log(form);
    const { city, state, category, sortBy, bedroomCount } = form;

    const url = `https://realty-in-us.p.rapidapi.com/properties/v2/${category}?city=${city}&state_code=${state.toUpperCase()}&limit=200&offset=0&sort=${sortBy}&beds_min=${bedroomCount}`;

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={`${container}`}>
      <Search fetchData={fetchData} />
    </div>
  );
};

export default Homepage;
