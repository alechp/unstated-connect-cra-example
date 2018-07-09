import React, { Component } from "react";
import { Provider } from "unstated";
import connect from "./connect";
import JokesContainer from "./jokes-container";
import Jokes from "./Jokes";
import Laughs from "./Laughs";

class App extends Component {
  render() {
    const ConnectedJokes = connect([JokesContainer])(Jokes);
    return (
      <Provider>
        <div className="App">
          <ConnectedJokes />
          <Laughs />
        </div>
      </Provider>
    );
  }
}

export default App;
