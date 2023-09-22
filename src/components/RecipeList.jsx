import React, { useState } from "react";
import Recipes from "./Recipes";
import RecipeSearch from "./RecipeSearch";

export default function RecipeList({ recipes, handleRecipeAdd }) {
  const [searching, setSearching] = useState("");
  return (
    <div className="recipe-list">
      <div>
        <RecipeSearch setSearching={setSearching} />
      </div>
      {recipes
        .filter((r) => r.name.toLowerCase().includes(searching.toLowerCase()))
        .map((recipe) => {
          return (
            <Recipes key={recipe.id} recipe={recipe} searching={searching} />
          );
        })}
      <div className="btn-container">
        <button className="btn" onClick={handleRecipeAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
