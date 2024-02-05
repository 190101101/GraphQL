import React from "react";
import { useQuery, gql } from "@apollo/client";
import Article from "../parts/Article";

const GET_ARTICLES = gql`
  query {
    articles {
      id
      article
      createdAt
      username
      commentCount
      likeCount
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);
  return (
    <div className="container my-5">
      {loading && <p className="text-center text-warning">loading...</p>}
      {error && <p className="text-center text-danger">error</p>}
      {data &&
        data.articles.map((article) => (
          <Article key={article.id} data={article} />
        ))}
    </div>
  );
};

export default Home;
