import React, { useState } from "react";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import Search from "../../components/search/Search";
import "./style.css";

function Homepage() {
  const [isLoading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getDataFromSearchComponent = (getData) => {
    setLoading(true);
    // calling the api
    async function getRecipies() {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=a533c7e64d1443b8aa18fd8c6c8ef541&query=${getData}`
      );
      const result = await apiResponse.json();
      const { results } = result;

      if (results && results.length > 0) {
        setLoading(false);
        setRecipes(results);
      }
    }
    getRecipies();
  };

  const addToFavourites = (selectedItem) => {
    let cpyFavourites = [...favourites];
    const index = cpyFavourites.findIndex(
      (item) => item.id === selectedItem.id
    );
    if (index === -1) {
      cpyFavourites.push(selectedItem);
      setFavourites(cpyFavourites);
      localStorage.setItem("favourites", JSON.stringify(cpyFavourites));
    } else {
      alert(`Item is already present in favourites`);
    }
  };

  return (
    <div className="homepage">
      <Search getDataFromSearchComponent={getDataFromSearchComponent} />
      {isLoading && (
        <div className="loading">Loading recipes... Please wait!</div>
      )}
      <div className="items">
        {recipes?.length > 0 &&
          recipes.map((recipe) => {
            return (
              <RecipeItem
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                recipe={recipe}
                addToFavourites={() => addToFavourites(recipe)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Homepage;
