import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { queryArticles } from "../graphql/query";
import Card from "../components/Card";
import ArticleForm from "../components/ArticleForm";
import { Loading, Error } from "../components/Response";
import { AuthContext } from "../context/Auth";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, data } = useQuery(queryArticles);

  return (
    <div className="container my-5">
      <h1 className="text-center">articles</h1>
      <div className="row">
        <div className="col-md-12 mb-3">
          {user && <ArticleForm />}
        </div>
        <div className="col-md-12">
          <Loading data={{ loading }} />
          <Error data={{ error }} />
          {data &&
            data.articles.map((article) => (
              <Card key={article.id} data={article}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
