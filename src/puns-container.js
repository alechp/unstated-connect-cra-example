import { Container } from "unstated";

export default class PunsContainer extends Container {
  constructor() {
    super();
    this.state = {
      puns: [
        "Atheism is a non-prophet organization",
        "Two silk worms had a race; they ended up in a tie",
        "A chicken crossing the road is poultry in motion"
      ]
    };
  }
  getPuns() {
    return this.state.puns;
  }
}
