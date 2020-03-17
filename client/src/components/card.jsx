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
      console.log(data[0]);
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
            {`Age: ${waifu.age}, Height ${waifu.height} cm, Weight: ${waifu.weight} kg`}
          </p>
          <p className="card-text text-secondary">
            {`Skintone: ${waifu.skintone}, Cupsize ${waifu.cupsize}`}
          </p>
          <p className="card-text text-secondary">
            {`Her hair is ${waifu.hairColor}, worn with ${waifu.hairstyle}.`}
          </p>
          <p className="card-text text-secondary">
            {`She is a ${waifu.disposition} ${waifu.attribute} and ${waifu.vice}.`}
          </p>
          {/* <a href="#" className="btn btn-outline-success">TEST</a> */}
        </div>
      </div>
    );
  }
}

export default Card;
