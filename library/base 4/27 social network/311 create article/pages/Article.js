import React from "react";

const Article = ({ match }) => {
  console.log(match);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">Article detail page</div>
      </div>
    </div>
  );
};

export default Article;
