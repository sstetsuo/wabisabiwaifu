import React, { Component } from 'react';
import CardSpec from './cardSpec';
import AddCard from './addCard';
import '../styles/card-style.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      key: 0,
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const { added, key } = this.state;
    if (added === true) {
      this.setState({ key: key + 1 });
    }
    this.setState({ added: true });
  }

  render() {
    const { added, key } = this.state;
    let card;

    if (added) {
      card = <CardSpec key={key} handleAdd={this.handleAdd} />;
    } else {
      card = <AddCard handleAdd={this.handleAdd} />;
    }

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {card}
        </div>
      </div>
    );
  }
}

export default Cards;
