import { Routes, Route } from "react-router-dom";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import CategoriesList from "../CategoriesList/CategoriesList";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import MainPage from "../pages/MainPage/MainPage";
import CategoriesRecipes from "../pages/CategoryRecipes/CategoriesRecipes";

import './App.scss'

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path="/categories/:name" element={<CategoriesRecipes/>} />
        </Routes>
      </main>
      <footer>
        <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
