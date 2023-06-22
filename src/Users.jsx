/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log("Users", users);
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <hr />
        {this.state.users.map((user) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
