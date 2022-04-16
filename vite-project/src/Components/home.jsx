import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3030/cities").then((res) => {
      setData(res.data);
    });
  };

  function Delete(e) {
    axios.delete(`http://localhost:3030/cities/${e}`);
    getData();
  }

  function Country() {
    data.sort(function (a, b) {
      return a.country.localCompare(b.country);
    });
    setData([...data]);
  }

  function Population(value) {
    if (value == 1) {
      data.sort(function (a, b) {
        return a.population - b.population;
      });
    } else {
      data.sort(function (a, b) {
        return b.population - a.population;
      });
    }
    setData([...data]);
  }

  return (
    <>
      <div>
        <button  onClick={Country}>
          Country
        </button>
        <button
          
          onClick={() => {
            Population(1);
          }}
        >
         ascending Population
        </button>
        <button
          
          onClick={() => {
            Population(-1);
          }}
        >
           decresing Population
        </button>
      </div>
      <div id="links">
        <Link to={"/"}>Home</Link> <Link to={"/add-country"}>AddCountry</Link>{" "}
        <Link to={"/add-city"}>AddCity</Link>
      </div>
      <div id="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.country}</td>
                    <td>{e.cityname}</td>
                    <td>{e.population}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => {
                          Delete(e);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
