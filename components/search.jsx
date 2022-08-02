import React, { useState } from "react";

const Search = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [sortCategory, setSortCategory] = useState(null);
  const [bedroomCount, setBedroomCount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching...");
  };

  const handleChange = (e) => {};

  const searchContainer = "w-1/5 h-screen bg-red-100";
  const inputBlock = "p-2 flex flex-col";
  const inputContainer = "w-48 border-2 border-black-100";
  const button =
    "bg-gray-100 hover:bg-black hover:text-white border-2 font-bold py-2 px-4 rounded mx-2";
  return (
    <div className={searchContainer}>
      <form onSubmit={handleSubmit}>
        <div className={inputBlock}>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            className={inputContainer}
            onChange={handleChange}
            value={city}
          />
        </div>
        <div className={inputBlock}>
          <label htmlFor="state">State Code:</label>
          <input type="text" className={inputContainer} value={state} />
        </div>
        <div className={inputBlock}>
          <label htmlFor="sort_by">Sort by:</label>
          <select
            name="sort_by"
            className={inputContainer}
            value={sortCategory}
          >
            <option value="relevance">Relevance</option>
            <option value="price_low">Lowest</option>
            <option value="price_high">Highest</option>
          </select>
        </div>
        <div className={inputBlock}>
          <label htmlFor="beds_min">Min bed:</label>
          <select
            name="beds_min"
            className={inputContainer}
            value={setBedroomCount}
          >
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
