import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/cards';
import List from './components/list';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anySave: false,
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.setState({ anySave: true });
  }

  render() {
    const { anySave } = this.state;
    let saved;

    if (anySave) {
      saved = <List />;
    }

    return (
      <div>
        { saved }
        <Cards handleSave={this.handleSave} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
