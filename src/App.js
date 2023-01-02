import './App.css';
// import Favorites from './Components/Favorites';
import Meals from './Components/Meals';
// import Modal from './Components/Modal';
import Search from './Components/Search';

function App() {
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      {/* <Modal /> */}
    </main>
  );
}

export default App;
