import React from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeIngredientsEdit from "./RecipeIngredientsEdit";

export default function RecipeEdit({
  selectedRecipe,
  setSelectedRecipeId,
  handleRecipeChange,
}) {
  function handleChange(change) {
    handleRecipeChange(selectedRecipe.id, { ...selectedRecipe, ...change });
  }
  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({
      ingredients: [...selectedRecipe.ingredients, newIngredient],
    });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: selectedRecipe.ingredients.filter((r) => r.id !== id),
    });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngre = [...selectedRecipe.ingredients];
    const index = selectedRecipe.ingredients.findIndex((i) => i.id === id);
    newIngre[index] = ingredient;
    handleChange({ ingredients: newIngre });
  }

  return (
    <div className="recipe-edit recipes-container recipe-edit--flex">
      <button
        onClick={() => setSelectedRecipeId(undefined)}
        className="recipe-edit--btn"
      >
        &times;
      </button>
      <div className="recipe-edit--grid">
        <label htmlFor="name">Name</label>
        <input
          value={selectedRecipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="CookTime">Cook Time</label>
        <input
          value={selectedRecipe.cookTime}
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          type="text"
          name="cooktime"
          id="cooktime"
        />
        <label>Servings</label>
        <input
          value={selectedRecipe.servings}
          onChange={(e) => handleChange({ servings: e.target.value })}
          type="number"
          name="servings"
          id="servings"
        />
        <label>Instructions:</label>
        <textarea
          value={selectedRecipe.instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
          name="instructions"
          id="instructions"
        />
        <label>Ingredients:</label>
      </div>
      <div className="recipe-indent grid-colum">
        <span className="ingre-label">Name</span>
        <span className="ingre-label">Amount</span>
        <span></span>
        {selectedRecipe.ingredients.map((ingredient) => (
          <RecipeIngredientsEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientDelete={handleIngredientDelete}
            handleIngredientChange={handleIngredientChange}
          />
        ))}
      </div>
      <div className="btn-add-container ">
        <button className="btn btn-add" onClick={handleIngredientAdd}>
          Add Ingredient
        </button>
      </div>
    </div>
  );
}
