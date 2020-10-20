import React, { Component } from 'react';
import $ from 'jquery';
import CardSpec from './cardSpec';
import AddCard from './addCard';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waifu: {},
      added: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.fetchWaifu();
  }

  fetchWaifu() {
    $.get('/api/loadWaifu', (waifu) => {
      this.setState({ waifu });
    });
  }

  handleAdd() {
    this.fetchWaifu();
    this.setState({
      added: true,
    });
  }

  render() {
    const { added, waifu } = this.state;
    let card;

    if (added) {
      card = <CardSpec waifu={waifu} handleAdd={this.handleAdd} />;
    } else {
      card = <AddCard handleAdd={this.handleAdd} />;
    }

    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            {card}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
