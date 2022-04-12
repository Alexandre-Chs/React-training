import React, { Component } from "react";

export default class ClassDisplayKey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyCode: null,
    };
  }

  handleKeyCode = (e) => {
    this.setState({
      keyCode: e.code,
    });
  };

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyCode);
  }

  componentWillUnmount() {
      console.log('il est arreté youpi')
    document.removeEventListener("keyup", this.handleKeyCode);
  }

  render() {
    const { keyCode } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="text-center">{keyCode}</h1>
        </div>
      </div>
    );
  }
}
