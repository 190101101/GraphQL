import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Clock = ({ match }) => {
  const [city, setCity] = useState(false);

  const fetchData = async ({ continent, city }) => {
    axios
      .get(`https://worldtimeapi.org/api/timezone/${continent}/${city}`)
      .then((response) => {
        setCity(response.data);
      });
  };

  useEffect(() => {
    fetchData(match.params);
  }, []);

  return (
    <>
      <div className="container center-align">
        <div className="card grey darken-4">
          <Link
            to="/"
            className="btn-floating  halfway-fab waves-light waves-effect deep-orange left"
          >
            <i class="material-icons">undo</i>
          </Link>
          <div className="card-content">
            <h4 className="center teal-text">{match.params.city}</h4>
            <h3 className="center deep-orange-text">{city.datetime}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
