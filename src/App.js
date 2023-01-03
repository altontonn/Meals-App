import './App.css';
// import Favorites from './Components/Favorites';
import Meals from './Components/Meals';
import Modal from './Components/Modal';
import Search from './Components/Search';
import { useGlobalContext } from './Context';

function App() {
  const {showModal} = useGlobalContext();
  return (
    <main>
      <Search />
      {/* <Favorites /> */}
      <Meals />
      { showModal && <Modal />}
    </main>
  );
}

export default App;
