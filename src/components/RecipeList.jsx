import React from "react";
import Recipes from "./Recipes";

export default function RecipeList({ recipes, handleRecipeAdd }) {
  return (
    <div className="recipe-list">
      <div className="">
        {recipes.map((recipe) => {
          return <Recipes key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="btn-container">
        <button className="btn" onClick={handleRecipeAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
