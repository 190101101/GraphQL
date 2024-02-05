import React from "react";
import { useQuery } from "@apollo/client";
import { queryArticles } from "../../graphql/query";
import Card from "../data/Card";
import {Loading, Error} from "../content/Response";


const Home = () => {
  const { loading, error, data } = useQuery(queryArticles);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <Loading data={{ loading }} />
          <Error data={{ error }} />
          {data && data.articles.map((article) => (
            <Card key={article.id} data={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
