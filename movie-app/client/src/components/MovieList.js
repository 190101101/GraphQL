import React, { Component } from "react";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const getMoviesQuery = gql`
  {
    movies {
      title
      description
      year
    }
  }
`;

class MovieList extends Component{
  render(){
    console.log(this.props)
    return (
      <div>
      <ul className="movie-list">
        <li>lorem ipsum</li>
      </ul>
    </div>
    )
  }  
}

export default graphql(getMoviesQuery)(MovieList);
