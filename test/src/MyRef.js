import React, { Component } from "react";

export class MyRef extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  update = (e) => {
    this.setState({
      value: e.target.value,
    });
    this.myTitle = React.createRef();
    this.myInput = React.createRef();
  };

  componentDidUpdate(prevProps, prevState) {
    this.myTitle.current.style.color = "red";
  }

  handleClick = () => {
    this.myInput.current.style.color = "blue";
  };
  render() {
    return (
      <div>
        <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
        {/* <input
          ref={this.myInput}
          type="text"
          value={this.state.value}
          onChange={this.update}
        ></input> */}
        <h1 ref={this.myInput} onCLick={this.handleClick}></h1>
        <input ref={this.myInput} type="text" />
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default MyRef;
