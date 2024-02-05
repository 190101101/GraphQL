import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [citiesBuffer, setCitiesBuffer] = useState(null);

  const fetchData = async () => {
    axios.get("https://worldtimeapi.org/api/timezone").then((response) => {
      setCities(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterOutCities = (e) => {
    const input = e.target.value;
    setCitiesBuffer((prevCity) => {
      return cities.filter((city) => {
        return city.toLowerCase().includes(input.toLowerCase());
      });
    });
  };

  const returnHtml = (city) => {
    return (
      <Link to={city} key={city} className="col l3 m3 s6">
        <div className="card grey darken-4">
          <div className="card-content teal-text">
            <p>{city}</p>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className="row container">
        <form className="col s12 l12 m12">
          <div className="input-field col s12">
            <input
              onChange={filterOutCities}
              type="text"
              id="city"
              className="teal-text input-field"
            />
            <label htmlFor="city" className="deep-orange-text">
              city name
            </label>
          </div>
        </form>
      </div>
      <div className="row">
        {citiesBuffer != null
          ? citiesBuffer.map((city) => returnHtml(city))
          : cities.map((city) => returnHtml(city))}
      </div>
    </>
  );
};

export default Cities;
