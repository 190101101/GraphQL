import React from "react";
import Form from "./Form";
import Snaps from "./Snaps";

const Home = ({ session }) => {
  return (
    <>
      <div className="description">
        <p className="sub_header__desc">
          simple snap app with <span>react</span>.
        </p>
      </div>
      <Form session={session} />
      <Snaps />
    </>
  );
};

export default Home;
