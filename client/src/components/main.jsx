import React, { Component } from 'react';
// import $ from 'jquery';
import CardSpec from './cardSpec';
import AddCard from './addCard';
import Waifu from '../models/Waifu';

class Main extends Component {
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
    const waifu = new Waifu();
    this.setState({ waifu });
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
      <div>
        {card}
      </div>
    );
  }
}

export default Main;
