/* eslint-disable no-console */
import React, { Component } from 'react';
import $ from 'jquery';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waifu: {},
    };
  }

  componentDidMount() {
    $.get('/api/testWaifu', (data) => {
      this.setState({ waifu: data[0] });
    });
  }

  render() {
    const { waifu } = this.state;
    return (
      <div className="card text-center">
        <div className="card-body text-dark">
          <h4 className="card-title">
            {waifu.name}
          </h4>
          <p className="card-text text-secondary">
            {`She is ${waifu.age}, ${waifu.height} cm tall, weighing ${waifu.weight}.`}
          </p>
          <p>
            {`She is a ${waifu.disposition} ${waifu.attribute} and ${waifu.vice}.`}
          </p>
          {/* <a href="#" className="btn btn-outline-success">TEST</a> */}
        </div>
      </div>
    );
  }
}

export default Card;
