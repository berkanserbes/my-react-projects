import React, { useState } from "react";
import Search from "../../components/search/Search";
import Favorites from "../../components/favorites/Favorites";
import RecipeItem from "../../components/recipe-item/RecipeItem";
import "./style.css";

function HomePage() {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [favoriteQuery, setFavoriteQuery] = useState("");

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

  // Create addFavorite function
  const addFavorite = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
  };

  // Create removeFavorite function
  const removeFavorite = (item) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.id !== item.id
    );
    setFavorites(newFavorites);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredFavorites = favorites.filter((favorite) =>
      favorite.title.toLowerCase().includes(favoriteQuery.toLowerCase())
    );
    setFavorites(filteredFavorites);
    setFavoriteQuery("");
  };

  return (
    <div>
      <Search handleSubmit={handleSubmit} />
      <div className="favorites-wrapper">
        <h1 className="favorites-title">Favorites</h1>
        <div className="search-favorites">
          <input
            name="filterfavorites"
            placeholder="Search in favorites"
            value={favoriteQuery}
            onChange={(e) => setFavoriteQuery(e.target.value)}
          />
          <button type="submit" onClick={onSubmit}>
            Filter
          </button>
        </div>
        <div className="favorites">
          {favorites.map((item) => {
            return (
              <Favorites
                id={item.id}
                image={item.image}
                title={item.title}
                removeFavorite={() => removeFavorite(item)}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="recipe-title">Recipe</h1>
      </div>
      <div className="items">
        {data.map((item) => {
          return (
            <RecipeItem
              id={item.id}
              image={item.image}
              title={item.title}
              addFavorite={() => addFavorite(item)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
