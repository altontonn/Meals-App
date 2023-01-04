import { useGlobalContext } from '../Context';

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      removeFromFavorites(idMeal);
    }
  }
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <div key={idMeal} className="favorite-item">
                <img src={image} className="favorites-img img" alt="favorite" onClick={() => selectMeal(idMeal, true)} onKeyDown={handleKeyDown} />
                <button className="remove-btn" type="button" onClick={() => removeFromFavorites(idMeal)} onKeyDown={handleKeyDown} >remove</button>
              </div>
            );
          })};
        </div>
      </div>
    </section>
  );
};
export default Favorites;
