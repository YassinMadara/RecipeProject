import React from "react";

export default function RecipeIngredientsEdit({
  ingredient,
  handleIngredientDelete,
  handleIngredientChange,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        value={ingredient.name}
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        value={ingredient.amount}
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <button
        className="btn btn-danger"
        onClick={() => handleIngredientDelete(ingredient.id)}
      >
        x
      </button>
    </>
  );
}
