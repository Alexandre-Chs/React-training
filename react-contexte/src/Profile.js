import React, { Component } from "react";
import lisa from "./lisa.png";
import ProfileData from "./ProfileData";
import { MyContext } from "./MyContext";

class Profile extends Component {
  render() {
    let value = this.context;
    return (
      <div className="container">
        <h1>{this.props.info.name}</h1>
        <p>Age: {value.age}</p>
        <img src={lisa} alt="lisa" className="img-thumbnail mb-3"></img>

        <ProfileData welcome={this.props.info} />
      </div>
    );
  }
}
Profile.contextType = MyContext;
console.log(Profile.contextType)
export default Profile;
