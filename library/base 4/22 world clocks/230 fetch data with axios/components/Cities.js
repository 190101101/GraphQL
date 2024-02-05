import React, { useEffect } from "react";
import axios from "axios";

const Cities = () => {
  
  const fetchData = async () => {
    axios.get("https://worldtimeapi.org/api/timezone")
    .then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Cities</div>;
};

export default Cities;
