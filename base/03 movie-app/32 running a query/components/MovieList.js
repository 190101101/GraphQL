import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      description
    }
  }
`;

const MovieList = (props) => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(data);

  return (
    <div>
      <ul className="movie-list">
        {data?.movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
