import React, { Component } from "react";
import connect from "./connect";
import JokesContainer from "./jokes-container";
import PunsContainer from "./puns-container";

class Giggles extends Component {
  constructor(props) {
    super(props);
    this.puns = this.props.containers[0]; //0 == Puns... Based on connect order
    this.jokes = this.props.containers[1]; //1 == Jokes ...Based on connect order
  }
  componentDidMount() {
    console.log(this.props.containers);
    console.log(
      "PunsContainer state being called in Giggles: ",
      this.puns.getPuns()
    );
    this.jokes.hello("Alec");
    this.puns.printPuns();
  }
  render() {
    return <div>Giggles</div>;
  }
}

export default connect([PunsContainer, JokesContainer])(Giggles);
