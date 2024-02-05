import { useQuery } from "@apollo/client";
import {getMoviesQuery} from '../queries/queries';

const MovieList = () => {
  const { loading, error, data } = useQuery(getMoviesQuery);
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
