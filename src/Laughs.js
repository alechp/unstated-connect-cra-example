import React, { Component } from "react";
import connect from "./connect";
import JokesContainer from "./jokes-container";

class Laughs extends Component {
  constructor() {
    super();
    this.state = {
      laughList: "laughStateInsideLaughComponentIsntUsed"
    };
  }
  componentDidMount() {
    const [jokes] = this.props.containers;
    jokes.getJoke();
  }
  render() {
    const [jokes] = this.props.containers;

    return (
      <div>
        {jokes.state.laughList.map((laugh, key) => (
          <div key={key}>{laugh}</div>
        ))}
      </div>
    );
  }
}

export default connect([JokesContainer])(Laughs);
