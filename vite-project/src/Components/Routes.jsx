import { Routes,Route } from "react-router-dom";
import { AddCountry } from "./addCity";
import { AddCity } from "./addCountry";
import { Home } from "./home";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/add-country" element={<AddCountry />} />
  <Route path="/add-city" element={<AddCity />} />
</Routes>;
