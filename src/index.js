import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Welcome to my Todo App</h1>
      </Fragment>
    );
  }
}

const element = document.getElementById('root');

render(<App />, element);