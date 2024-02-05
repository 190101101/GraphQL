import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Clock = ({match}) => {

  useEffect(() => {
    console.log(match);
  }, []);

  return <>
    <div className="row container">
      <Link to="/" className="teal-text">home</Link>
    </div>
    <div className="row">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non architecto sunt amet in distinctio? Omnis consectetur aliquid id vitae sint repellat quia praesentium, accusantium facilis? Rem odio aspernatur esse numquam?
    </div>
  </>;
};

export default Clock;
