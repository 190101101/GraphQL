import React, { useEffect, useState } from "react";
import axios from "axios";

const Cities = () => {
  const [cities, setCities] = useState([]);

  const fetchData = async () => {
    axios.get("https://worldtimeapi.org/api/timezone").then((response) => {
      setCities(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="row">
      {cities &&
        cities.map((city) => 
          <div key={city} className="col l3 m3 s6">
            <div className="card grey darken-4">
              <div className="card-content teal-text">
                <p>{city}</p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cities;
