import React, { useState } from "react";
import Search from "../../components/search/Search";
import Favorites from "../../components/favorites/Favorites";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import "./style.css";

function HomePage() {
  const [data, setData] = useState([]);
  // const [favorites, setFavorites] = useState([]);

  const handleSubmit = (e, query) => {
    e.preventDefault();

    async function getRecipes() {
      const res =
        await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=c193f2f6cf8b40a3afef6bcba3389e1c&query=${query}
      `);
      console.log(res);
      const data = await res.json();
      setData(data.results);
      console.log(data);
    }
    getRecipes();
  };

  return (
    <div>
      <Search handleSubmit={handleSubmit} />
      <Favorites />
      <div className="items">
        {data.map((item) => {
          return (
            <RecipeItem id={item.id} image={item.image} title={item.title} />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
