import React, { useContext } from "react";
import Ingredient from "./Ingredient";
import { RecipeContext } from "./App";

export default function Recipes(props) {
  const { id, name, servings, cookTime, instructions, ingredients } = props;
  const ele = ingredients.map((ingredient) => {
    return (
      <div className="grid">
        <Ingredient key={ingredient.id} {...ingredient} />
      </div>
    );
  });

  const { handleRecipeDelete } = useContext(RecipeContext);
  return (
    <div className="recipes-container">
      <div className="flex-header recipe-header">
        <label className="recipe-title">{name}</label>
        <div>
          <button className="btn">Edit</button>
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
        <label>Cook Time:</label>
        <label>{servings}</label>
      </div>
      <div>
        <label>Servings:</label>
        <label>{cookTime}</label>
      </div>
      <div>
        <label>Instructions:</label>
        <div className="recipe-indent  recipe-instruction">{instructions}</div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div className="recipe-indent">{ele}</div>
      </div>
    </div>
  );
}
