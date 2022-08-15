import React, { useState } from "react";

const Search = ({ fetchData }) => {
  const [form, setForm] = useState({
    city: "",
    state: "",
    category: "list-for-rent",
    sortBy: "relevance",
    bedroomCount: "studio",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(form);
    setForm({
      city: "",
      state: "",
      category: "list-for-rent",
      sortBy: "relevance",
      bedroomCount: "studio",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const searchContainer = "w-1/5 h-screen bg-red-400";
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
            value={form.city}
            className={inputContainer}
            onChange={handleChange}
            name="city"
            required
          />
        </div>
        <div className={inputBlock}>
          <label htmlFor="state">State Code:</label>
          <input
            type="text"
            className={inputContainer}
            value={form.state}
            name="state"
            onChange={handleChange}
            required
          />
        </div>
        <div className={inputBlock}>
          <label htmlFor="category">Category:</label>
          <select
            className={inputContainer}
            value={form.category}
            name="category"
            onChange={handleChange}
            required
          >
            <option value="list-for-rent">Rent</option>
            <option value="list-for-sale">Sale</option>
          </select>
        </div>

        <div className={inputBlock}>
          <label htmlFor="sort_by">Sort by:</label>
          <select
            className={inputContainer}
            value={form.sortBy}
            name="sortBy"
            onChange={handleChange}
            required
          >
            <option defaultValue="relevance">Relevance</option>
            <option value="price_low">Lowest</option>
            <option value="price_high">Highest</option>
          </select>
        </div>
        <div className={inputBlock}>
          <label htmlFor="beds_min">Min bed:</label>
          <select
            className={inputContainer}
            value={form.bedroomCount}
            name="bedroomCount"
            onChange={handleChange}
            required
          >
            <option value="studio">Studio</option>
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
