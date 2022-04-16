import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Addcity } from "./Components/addCity";
import { Addcountry } from "./Components/addCountry";
import { Home } from "./Components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-city" element={<Addcity />} />
        <Route path="/add-country" element={<Addcountry />} />
      </Routes>
    </div>
  );
}

export default App;
