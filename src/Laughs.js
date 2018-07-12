import React, { Component } from "react";
import connect from "./connect";
import JokesContainer from "./jokes-container";

class Laughs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laughList: "laughStateInsideLaughComponentIsntUsed"
    };
  }
  componentDidMount() {
    // const [jokes] = this.props.containers;
    const jokes = this.props.containers[0];
    //This technically works, but the big problem here is that if there's more than one connect...
    jokes.print("Alec");
    console.log(`this.props.containers: ${this.props.containers}`);
    jokes.getJoke(); //no brackets, getJoke is synchronous
  }
  render() {
    const [jokes] = this.props.containers;
    // let data = jokes.foobar(); //Promise stays pending
    let data = [jokes.foobar()]; //Promise finishes
    let data2 = Promise.resolve([jokes.foobar()]); //Promise finishes

    jokes.print("World"); //no brackets, print is sync
    console.log(data);
    console.log(data2);

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

//TODO: See if I can replace everything with one jokes call
//TODO: See what happens when I try to connect multiple containers...
//? Does the connection order ever change or persist based on call?
//? Is it possible to call by key?
