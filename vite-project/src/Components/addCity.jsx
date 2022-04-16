import axios from "axios";
import { useState } from "react";

export const AddCountry = () => {
  const [country, setCountry] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http:/localhost:3030/countries", { name: country });
  }

  function handleChange(e) {
    setCountry(e.target.value);
  }

  return (
    <>
      <h1>ADD COUNTRY</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Country Name Here"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};
