import React, { Component } from "react";
import { Query, Mutation } from "@apollo/client/react/components";
import { getDirectorsQuery, newMovieMutation, getMoviesQuery } from "../queries/queries";

class NewMovieForm extends Component {
  state = {
    title: "",
    description: "",
    year: null,
    directorId: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Mutation mutation={newMovieMutation}>
        {(addMovie, { loading, error }) => (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addMovie({
                  variables:{
                    title: this.state.title,
                    description: this.state.description,
                    year: parseInt(this.state.year, 10),
                    directorId: this.state.directorId,
                  },
                  refetchQueries:[{query:getMoviesQuery}]
                });
              }}
            >
              <div>
                <label>Title</label>
                <input
                  onChange={this.onChange}
                  type="text"
                  name="title"
                  placeholder="Title"
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  onChange={this.onChange}
                  name="description"
                  cols="21"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <label>Year</label>
                <input
                  onChange={this.onChange}
                  type="text"
                  name="year"
                  placeholder="Year"
                />
              </div>
              <div>
                <label>Director</label>
                <Query query={getDirectorsQuery}>
                  {({ loading, error, data }) => {
                    const loadingOption = (
                      <option disabled={true}>Loading...</option>
                    );
                    const errorOption = <option disabled={true}>Error.</option>;

                    return (
                      <select onChange={this.onChange} name="directorId">
                        <option disabled={true}>Select Director</option>
                        {loading
                          ? loadingOption
                          : error
                          ? errorOption
                          : data?.directors.map(({ id, name }) => (
                              <option key={id} value={id}>
                                {name}
                              </option>
                            ))}
                      </select>
                    );
                  }}
                </Query>
              </div>
              <div>
                <button type="submit">Click</button>
              </div>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div>Error!</div>}
          </div>
        )}
      </Mutation>
    );
  }
}

export default NewMovieForm;
