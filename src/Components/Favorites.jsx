import { useGlobalContext } from '../Context';

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } = item;
            return (
              <div key={idMeal} className="favorite-item">
                {/* // eslint-disable-next-line no-noninteractive-element-interactions */}
                <img src={image} className="favorites-img img" alt="favorite" onClick={() => selectMeal(idMeal, true)} onKeyDown={() => selectMeal(idMeal, true)} />
                <button className="remove-btn" type="button" onKeyDown={() => removeFromFavorites(idMeal)} onClick={() => removeFromFavorites(idMeal)}>remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Favorites;
