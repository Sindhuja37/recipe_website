import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./recipeList";
import RecipeDetail from "./recipeDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipeDetail/:id" element={<RecipeDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
