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

const MovieList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(data);

  let loadingOption = <li disabled={true}>Loading...</li>
  let errorOption = <li disabled={true}>Error.</li>

  return (
    <div>
      <ul className="movie-list">
        {loading && loadingOption} {error && errorOption}
        {data?.movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
