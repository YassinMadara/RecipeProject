import React from "react";

export default function RecipeSearch({ setSearching }) {
  return (
    <div className="search-container">
      <label className="search-name">Search </label>
      <input
        className="search-input"
        onChange={(e) => setSearching(e.target.value)}
      ></input>
    </div>
  );
}
