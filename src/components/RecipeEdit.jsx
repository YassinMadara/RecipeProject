import React from "react";
import RecipeIngredientsEdit from "./RecipeIngredientsEdit";

export default function RecipeEdit({ name }) {
  return (
    <div className="recipe-edit recipe-edit--flex">
      <button className="btn btn-danger recipe-edit--btm">x</button>
      <div className="recipe-edit--grid">
        <label>Name</label>
        <input value={name} />
        <label>Cook Time</label>
        <input />
        <label>Servings</label>
        <input />
        <span>Instructions:</span>
        <textarea />
      </div>
      <div>
        <label>Ingredients:</label>
        <div>
          <RecipeIngredientsEdit />
        </div>
        <div className="btn-add-container ">
          <button className="btn btn-add">Add Ingredient</button>
        </div>
      </div>
    </div>
  );
}
