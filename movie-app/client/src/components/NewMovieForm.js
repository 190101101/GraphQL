import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_DIRECTORS = gql`
  query getDirectors {
    directors {
      id
      name
      birth
    }
  }
`;

const NewMovieForm = () => {
  const { loading, error, data } = useQuery(GET_DIRECTORS);

  let loadingOption = <option disabled={true}>Loading...</option>
  let errorOption = <option disabled={true}>Error.</option>

  return (
    <div>
      <form>
        <div>
          <label>title</label>
          <input type="text" name="title" placeholder="title" />
        </div>
        <div>
          <label>description</label>
          <textarea
            name="description"
            cols="21"
            placeholder="description"
          ></textarea>
        </div>
        <div>
          <label>year</label>
          <input type="text" name="year" placeholder="year" />
        </div>
        <div>
          <label>director</label>
          <select name="director" id="director">
            <option value="director">select director</option>
            {loading && loadingOption} {error && errorOption}
            {data?.directors.map((director) => (
              <option key={director.id} value={director.name}>
                {director.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">click</button>
        </div>
      </form>
    </div>
  );
};

export default NewMovieForm;
