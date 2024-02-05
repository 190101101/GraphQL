import { gql } from "@apollo/client";

export const getMoviesQuery = gql`
  query getMovies {
    movies {
      id
      title
      description
    }
  }
`;

export const getDirectorsQuery = gql`
  query getDirectors {
    directors {
      id
      name
      birth
    }
  }
`;
