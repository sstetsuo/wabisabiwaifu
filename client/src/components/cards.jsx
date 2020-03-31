import React, { Component } from 'react';
import $ from 'jquery';
import CardSpec from './cardSpec';
import AddCard from './addCard';
import '../styles/card-style.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waifus: [],
      waifu: {},
      added: false,
      key: 0,
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    $.get('/api/loadWaifus', (waifus) => {
      this.setState({ waifus });
    });
  }

  handleAdd() {
    const { added, waifus, key } = this.state;
    if (added === true) {
      this.setState({ key: key + 1 });
    }
    const randomIndex = Math.floor(Math.random() * waifus.length);
    const waifu = waifus.splice(randomIndex, 1)[0];
    this.setState({
      waifu,
      added: true,
    });
  }

  render() {
    const { added, waifu, key } = this.state;
    let card;

    if (added) {
      card = <CardSpec key={key} waifu={waifu} handleAdd={this.handleAdd} />;
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
