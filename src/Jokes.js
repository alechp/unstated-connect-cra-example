import React, { Component } from "react";

export default class Jokes extends Component {
  componentDidMount() {
    const [jokes] = this.props.containers;
    jokes.getJoke();
  }

  render() {
    const [jokes] = this.props.containers;

    return (
      <div>
        {jokes.state.jokeList.map((joke, key) => (
          <div key={key} data-test="joke">
            {joke}
          </div>
        ))}
      </div>
    );
  }
}

/* Don't need the data-test, just included in the original unstated-connect test

  it("Should have a joke after mount", () => {
    wrapper.update();
    expect(wrapper.find('[data-test="joke"]').length).toBe(1);
  });
});

*/
