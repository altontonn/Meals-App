import { BsHandThumbsUp } from 'react-icons/bs';
import { useGlobalContext } from '../Context';

const Meals = () => {
  const {
    meals, loading, selectMeal, addToFavorites,
  } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meals matched your search term. Please try again.</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            {/* eslint-disable */}
            <img src={image} className="img" onClick={() => selectMeal(idMeal)} alt="food" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn" type="button" onClick={() => addToFavorites(idMeal)}>
                <BsHandThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};
export default Meals;
