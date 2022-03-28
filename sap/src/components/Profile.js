import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    const data = this.props.match.params.profileId;

    let payload = {
      token: "SiNTxwDhIotfk3YdYTDn-A",
      data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 10,
      },
    };

    axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: payload,
    }).then((resp) => {
      this.setState({
        data: resp.data[data],
      });
    });
  }

  render() {
    const { email, name, phone } = this.state.data;
    return (
      <div className="container mt-3">
        <h1>Profile</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Nom: {name}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Number: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
