import { Routes, Route } from "react-router-dom";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import MainPage from "../pages/MainPage/MainPage";

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
        </Routes>
      </main>
      <footer>
        <AppFooter/>
      </footer>
    </div>
  );
}

export default App;
