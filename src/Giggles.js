import React, { Component } from "react";
import connect from "./connect";
import JokesContainer from "./jokes-container";
import PunsContainer from "./puns-container";

class Giggles extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.containers);
    // this.jokes = this.props.containers[0];
  }
  componentDidMount() {
    console.log(this.props.containers);
  }
  render() {
    return <div>Giggles</div>;
  }
}

export default connect([PunsContainer, JokesContainer])(Giggles);
