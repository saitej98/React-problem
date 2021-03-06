import { useState } from "react";

export const Addcity = () => {
  var obj = {
    cityname: "",
    population: "",
    country: "",
  };
  let [data, setData] = useState(obj);
  let countries = [{ name: "india" }, { name: "England" }];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h1>City Country</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>City-Name: </label>
          <input type="text" id="cityname" onChange={handleChange} />
          <label>Population: </label>
          <input type="number" id="population" onChange={handleChange} />
          <label>Country: </label>
          <select name="" id="country" onChange={handleChange}>
            <option>Select-Country</option>
            {countries.map((e) => {
              return (
                <>
                  <option value={e.name}>{e.name}</option>
                </>
              );
            })}
          </select>
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
