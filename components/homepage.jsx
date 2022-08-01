import React from "react";
import Search from "../components/search";

const Homepage = () => {
  const container = "w-3/4 mx-auto border-2 p-8 border-red-500";

  return (
    <div className={`${container}`}>
      <Search />
    </div>
  );
};

export default Homepage;
