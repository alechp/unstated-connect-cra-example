import { Container } from "unstated";

export default class JokesContainer extends Container {
  constructor() {
    super();

    this.state = {
      jokeList: ["priest", "rabbi", "horse", "bar"],
      laughList: ["ha", "hehe", "ha ha", "hahaha"]
    };
  }

  getJoke() {
    this.setState({ list: this.state.jokeList.concat("joke") });
    console.log(this.name);
  }
}
