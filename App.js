import LoginPage from "./pages/LoginPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HotelList from "./pages/HotelList";
import FoodList from "./pages/Foodlist";

function App() {
  return (
    <Routes>
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/HotelList" element={<HotelList />} />
      <Route path="/FoodList/:id" element={<FoodList />} />
    </Routes>
  );
}

export default App;
