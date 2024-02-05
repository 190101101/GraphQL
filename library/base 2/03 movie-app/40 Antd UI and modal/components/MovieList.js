import React, { Component } from "react";
import { Button, Modal } from "antd";
import { Query, Mutation } from "@apollo/client/react/components";
import { getMoviesQuery, getMovieQuery } from "../queries/queries";

class MovieList extends Component {
  state = { visible: false };

  showModal = (id) => {
    console.log(id);
    this.setState({ visible: true });
  };

  handleOk = () => {
    this.setState({ visible: false });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="container" data-state="Movie App">
        <Modal
          title="Basic Modal"
          open={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          
          <p>Some contents...</p>
        </Modal>

        <div className="device" data-view="list">
          <ul className="movie-list layer" data-layer="list">
            <Query query={getMoviesQuery}>
              {({ loading, error, data }) => {
                if (loading) return <li disabled={true}>Loading...</li>;
                if (error) return <li disabled={true}>Error.</li>;
                return data?.movies.map(({ id, title, description }) => (
                  <li
                    onClick={() => {
                      this.showModal(id);
                    }}
                    className="content"
                    key={id}
                  >
                    <div className="bg"></div>
                    <div className="avatar"></div>
                    <div className="title">{title}</div>
                    <p>{description}</p>
                  </li>
                ));
              }}
            </Query>
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieList;
