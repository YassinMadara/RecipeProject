import React, { useContext } from "react";
import Ingredient from "./Ingredient";
import { RecipeContext } from "./App";

export default function Recipes({ recipe, searching }) {
  const { id, name, servings, cookTime, instructions, ingredients } = recipe;

  const ingredientElement = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });

  const { handleRecipeDelete, setSelectedRecipeId } = useContext(RecipeContext);
  return (
    <div className="recipes-container">
      <div className="flex-header recipe-header">
        <label id="header">{name}</label>
        <div>
          <button className="btn" onClick={() => setSelectedRecipeId(id)}>
            Edit
          </button>
          <button
            className="btn btn-danger btn-margin"
            onClick={() => {
              handleRecipeDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <label>Cook Time: </label>
        <label>{cookTime}</label>
      </div>
      <div>
        <label>Servings: </label>
        <label>{servings}</label>
      </div>
      <div>
        <label>Instructions:</label>
        <div className="recipe-indent  recipe-instruction">{instructions}</div>
      </div>
      <div>
        <label>Ingredients:</label>
        <div className="recipe-indent grid">{ingredientElement}</div>
      </div>
    </div>
  );
}
