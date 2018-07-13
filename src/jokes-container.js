import { Container } from "unstated";

export default class JokesContainer extends Container {
  constructor() {
    super();
    console.log(`Jokes container constructed`);
    this.state = {
      jokeList: ["priest", "rabbi", "horse", "bar"],
      laughList: ["ha", "hehe", "ha ha", "hahaha"]
    };
  }
  async foobar() {
    var url = "https://jsonplaceholder.typicode.com/posts/1";
    return await fetch(url);
  }
  getJoke() {
    this.setState({ list: this.state.jokeList.concat("joke") });
  }
  hello(name) {
    console.log(`Herro, ${name}`);
  }
}
