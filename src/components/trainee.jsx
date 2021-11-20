import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UpdateCoder from "./updateCoder";

class Trainee extends React.Component {
  state = {
    coders: [],
  };
  componentDidMount() {
    axios
      //Axios allows us to communicate with APIs easily in our React apps
      .get("http://localhost:8085/api/getCoders") //to connect with data  base
      .then((response) => {
        this.setState({ coders: response.data });
      })
      .catch();
  }
  handleDelete = (eid) => {
    axios.delete(`http://localhost:8085/api/deleteCode/${eid}`).then((res) => {
      const coders = this.state.coders.filter((std) => std.cid != eid);
      this.setState({ coders: coders });
    });
  };
  render() {
    return (
      <div>
        <h1>Coder Page</h1>
        <Link
          to="/getCoders/add"
          className="btn btn-secondary btn-large mb-1 float-end"
        >
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Cid</th>
              <th>Name</th>
              <th>Tech</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coders.map((trin) => (
              <tr>
                <td>{trin.cid}</td>
                <td>{trin.name}</td>
                <td>{trin.tech}</td>
                <td>
                  <Link to={`/coders/update/${trin.cid}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-success me-2 mt-3"
                    />
                  </Link>
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger ms-2 mt-3"
                    onClick={() => this.handleDelete(trin.cid)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Trainee;
