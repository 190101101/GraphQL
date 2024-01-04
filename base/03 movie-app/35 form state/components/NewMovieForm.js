import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { getDirectorsQuery } from "../queries/queries";

class NewMovieForm extends Component {
  state = {
    title: "",
    description: "",
    year: null,
    directorId: "",
  };

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
                      : data?.directors.map(({id, name}) => (
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
      </div>
    );
  }
}

export default NewMovieForm;
