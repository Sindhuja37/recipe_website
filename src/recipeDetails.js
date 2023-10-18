import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import data from "./mockRecipeList.json";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  let { id } = useParams();

  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  let fetchData = () => {
    // console.log(id);
    // console.log(data.recipes);

    //const recipes = data.recipes.filter((item) => item.id == id);
    console.log(JSON.parse(localStorage.getItem("recipes")));
    setRecipe(
      JSON.parse(localStorage.getItem("recipes")).filter(
        (item) => item.id == id
      )
    );
    // console.log(recipe);
    // setIngredients(recipe[0].ingredients.split(","));

    // console.log(ingredients[0]);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {recipe.length > 0 ? (
        <div>
          <h2 className="app-header">{recipe[0].title}</h2>
          <img className="image-detail" src={recipe[0].img} alt="recipe"></img>
          <h3 className="sub-header">Ingredients</h3>
          <div className="app-list">
            {recipe[0].ingredients.length > 0
              ? recipe[0].ingredients.split(",").map((item) => <li>{item}</li>)
              : ""}
          </div>

          <h3 className="sub-header">Instructions To Prepare</h3>
          <div className="app-list">
            {recipe[0].steps.length > 0
              ? recipe[0].steps.split(".").map((item) => (
                  <ul>
                    <li>{item}</li>
                  </ul>
                ))
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default RecipeDetail;
