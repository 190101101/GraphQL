import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { getMoviesQuery } from "../queries/queries";

class MovieList extends Component {
  render() {
    return (
      <Query query={getMoviesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <li disabled={true}>Loading...</li>;
          if (error) return <li disabled={true}>Error.</li>;

          return (
            <div>
              <ul className="movie-list">
                {data?.movies.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default MovieList;
