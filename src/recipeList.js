import React, { useState, useEffect } from "react";
import data from "./mockRecipeList.json";
import { Link } from "react-router-dom";
import DropdownWithAutocomplete from "./autocomplete.js";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    id: 0,
    title: "",
    ingredients: "",
    steps: "",
  });
  // const options = useState(JSON.parse(localStorage.getItem("recipes")).title);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data.recipes));
    setRecipes(JSON.parse(localStorage.getItem("recipes")));
    let optionTitle = [];
    let optionRecipes = JSON.parse(localStorage.getItem("recipes"));
    // console.log(optionRecipes);
    for (let i = 0; i < optionRecipes.length; i++) {
      optionTitle.push(optionRecipes[i].title);
    }
    console.log(optionTitle);
    setOptions(optionTitle);
  }, []);

  const handleInputChange = (e) => {
    // console.log(options);
    if (e.target.value == "") {
      console.log("hi");
      setRecipes(JSON.parse(localStorage.getItem("recipes")));
    }
    const input = e.target.value;
    setInputValue(input);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredOptions(filtered);
    console.log(e.target.value);
  };

  const handleOptionClick = (option) => {
    setInputValue(option);
    setSelectedOption(option);
    setFilteredOptions([]);
    let filteredRecipe = recipes.filter((item) => item.title == option);
    console.log(filteredRecipe);
    setRecipes(filteredRecipe);
  };

  const handleAddRecipe = () => {
    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
    // console.log(recipes);
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div>
      <div>
        <h1 className="app-header">Tasty recipes</h1>
        <div className="autocomplete">
          <input
            className="search-input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search Recipes"
          />
          <ul className="autocomplete-list">
            {filteredOptions.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="sub-header">Recipe List</h2>
      <ol className="recipe-list">
        {recipes.map((recipe) => (
          <div class="card" key={recipe.id}>
            <img className="image" src={recipe.img} alt="recipe"></img>
            <Link id="submit" to={`/recipeDetail/${recipe.id}`}>
              {recipe.title}
            </Link>
          </div>
        ))}
      </ol>

      <div className="add-recipe">
        <h2>Add Your Own Recipe</h2>
        <div className="add-recipe-card">
          <input
            className="recipe-input"
            type="text"
            placeholder="Recipe Title"
            value={newRecipe.title}
            onChange={(e) =>
              setNewRecipe({
                ...newRecipe,
                title: e.target.value,
                id: recipes.length + 1,
              })
            }
          />
        </div>
        <br></br>
        <textarea
          className="recipe-input"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, ingredients: e.target.value })
          }
        />
        <br></br>
        <textarea
          className="recipe-input"
          placeholder="steps"
          value={newRecipe.steps}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, steps: e.target.value })
          }
        />
        <br></br>
        <button className="button" onClick={handleAddRecipe}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default RecipeList;
