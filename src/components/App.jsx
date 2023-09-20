import RecipeList from "./RecipeList";
import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";

export const RecipeContext = createContext();

const localStorageKey = "RecipeProject.app";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(localStorageKey);
    if (recipeJSON !== null) {
      setRecipes(JSON.parse(recipeJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recipes));
  }, [recipes]);

  const contextValue = {
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "Name",
      servings: undefined,
      cookTime: "",
      instructions: "",
      ingredients: [
        {
          id: uuidv4(),
          name: "",
          amount: "",
        },
      ],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(
      recipes.filter((recipe) => {
        return recipe.id !== id;
      })
    );
  }

  return (
    <div className="flex">
      <RecipeContext.Provider value={contextValue}>
        <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} />
        <RecipeEdit recipes={recipes} />
      </RecipeContext.Provider>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pound",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
      {
        id: 5,
        name: "Pepper",
        // amount: "4 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Meat",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put salt on Meat\n2. Put Meat in oven\n3. Eat Meat",
    ingredients: [
      {
        id: 1,
        name: "Meat",
        amount: "3 Pound",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

export default App;
