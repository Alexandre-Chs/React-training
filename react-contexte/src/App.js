import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./Profile";
import { MyContext } from "./MyContext";
import { Component } from "react";

class App extends Component {
  state = {
    user: {
      name: "Lisa",
      age: 8,
    },
  };
  render() {
    return (
      <div>
        <MyContext.Provider value={this.state.user}>
          <Profile info={this.state.user} />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
