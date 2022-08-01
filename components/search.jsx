import React, { useState } from "react";

const Search = () => {
  const [city, setCity] = useState("chicago");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching...");
  };

  const handleChange = (e) => {};

  const inputContainer = "w-64 mx-auto border-2 border-black-100";
  const button =
    "bg-black-500 hover:bg-black-700 text-red border-2 font-bold py-2 px-4 rounded";
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className={inputContainer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State Code:</label>
          <input type="text" className={inputContainer} />
        </div>
        <div>
          <label htmlFor="sort_by">Sort by:</label>
          <select name="sort_by" className={inputContainer}>
            <option value="relevance">Relevance</option>
            <option value="price_low">Lowest</option>
            <option value="price_high">Highest</option>
          </select>
        </div>
        <div>
          <label htmlFor="beds_min">Min bed:</label>
          <select name="beds_min">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button type="submit" className={button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
