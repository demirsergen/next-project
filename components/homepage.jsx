import React from "react";
import Search from "../components/search";

const Homepage = () => {
  const container = "w-full mx-auto ";

  return (
    <div className={`${container}`}>
      <Search />
    </div>
  );
};

export default Homepage;
