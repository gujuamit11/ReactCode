import React, { Component } from "react";
import axios from "axios";

class TrineeForm extends React.Component {
  state = {
    coder: {
      name: "",
      tech: "",
      role: "",
    },
  };
  handleChange = (event) => {
    const coder = { ...this.state.coder };
    coder[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ coder: coder });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const coder = {
      cid: 0,
      name: this.state.coder.name,
      tech: this.state.coder.tech,
      role: this.state.coder.role,
    };
    axios
      .post("http://localhost:8085/api/addcCoder", this.state.coder)
      .then((res) => {
        this.props.history.push("/coder");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3>Register Form</h3>
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
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.coder.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="coder">Coder</option>
            <option value="admin">Admin</option>
          </select>
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

export default TrineeForm;
