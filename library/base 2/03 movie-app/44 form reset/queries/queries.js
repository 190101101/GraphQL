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

export const getMovieQuery = gql`
  query($id:String) {
    movie(id:$id) {
      id,
      title,
      description,
      year,
      director{
        name,
        movies{
          id,
          title
        }
      }
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

export const newMovieMutation = gql`
  mutation (
    $title: String!
    $description: String
    $year: Int!
    $directorId: String!
  ) {
    addMovie(
      title: $title
      description: $description
      year: $year
      directorId: $directorId
    ) {
      title
      description
      year
    }
  }
`;
