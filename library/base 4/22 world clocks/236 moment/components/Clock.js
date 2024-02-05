import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

const Clock = ({ match }) => {
  const [city, setCity] = useState(false);
  const [week, setWeek] = useState(false);
  const [day, setDay] = useState(false);

  const fetchData = async ({ continent, city }) => {
    axios
      .get(`https://worldtimeapi.org/api/timezone/${continent}/${city}`)
      .then((response) => {
        setCity(response.data);
        setWeek(response.data.week_number);
        setDay(response.data.day_of_year);
      })
      .catch((error) => {
        setCity(false);
        console.log(error);
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
            <i className="material-icons">undo</i>
          </Link>
          <div className="card-content">
            <h4 className="center teal-text">{match.params.city}</h4>
            <h3 className="center deep-orange-text">
              {moment(city.datetime).format("MMMM Do YYYY, h:mm:ss")}
            </h3>
            <h6 className="deep-orange-text">{week}th week of the year</h6>
            <h6 className="deep-orange-text">{day}th day of the year</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
