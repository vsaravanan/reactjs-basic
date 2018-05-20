import React from "react";
import "./App.css";

import axios from "axios";

class UserCompany extends React.Component {
  state = { company: undefined, loaded: false };
  fetchCompany = () => {
    axios({
      url: "https://api.github.com/graphql",
      method: "post",
      data: {
        query: `{
          user(login: "${this.props.username}") {
            company
          }
        }`
      },
      headers: {
        Authorization: `bearer f39b8b14158d792feac63c9ec086c93a4ab8be76`
      }
    }).then(
      response => {
        this.setState({
          company: response.data.data.user.company,
          loaded: true
        });
      },
      error => {
        this.setState({ error, loaded: true });
      }
    );
  };

  componentDidMount() {
    this.fetchCompany();
  }

  render() {
    return this.state.company || "Unknown";
  }
}
const username = "vsaravanan";
const element = (
  <div>
    <div>
      {`@${username} works at `}
      <UserCompany username={username} />
    </div>
  </div>
);

export default class App extends React.Component {
  render() {
    return element;
  }
}
