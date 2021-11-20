import React, { Component } from "react";

import axios from "axios";
class UpdateCoder extends React.Component {
  state = {
    coder: {
      cid: "",
      name: "",
      tech: "",
      role: "",
    },
  };

  componentDidMount() {
    axios
      //Axios allows us to communicate with APIs easily in our React apps
      .get(`http://localhost:8085/api/get/${this.props.match.params.cid}`) //to connect with data  base
      .then((res) => {
        const coder = { ...this.state.coder };
        coder.cid = res.data.cid;
        coder.name = res.data.name;
        coder.tech = res.data.tech;
        this.setState({ coder: coder });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const coder = { ...this.state.coder }; //copying object from
    coder[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ coder: coder });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const coder = {
      cid: this.state.coder.cid,
      name: this.state.coder.name,
      tech: this.state.coder.tech,
      // role: this.state.coder.role,
    };
    axios
      .put(
        `http://localhost:8085/api/updateCoder/${this.props.match.params.cid}`,
        this.state.coder
      )
      .then((res) => {
        this.props.history.push("/trinee");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Update Coder</h1>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Coder Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.coder.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputTech" className="form-label">
              Tech
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTech"
              aria-describedby="emailHelp"
              value={this.state.coder.tech}
              name="tech"
              onChange={this.handleChange}
            />
          </div>
          {/* <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.coder.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="coder">Coder</option>
            <option value="admin">Admin</option>
          </select> */}
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateCoder;
