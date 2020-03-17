/* eslint-disable no-console */
import React, { Component } from 'react';
import $ from 'jquery';

class CardSpec extends Component {
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
      <div className="card text-left">
        <div className="card-body text-dark">
          <h4 className="card-title">{waifu.name}</h4>
          <table className="table">
            <tbody>
              <tr className="spec">
                <td>{`Age: ${waifu.age}`}</td>
                <td>{`Height: ${waifu.height}`}</td>
                <td>{`Weight: ${waifu.weight}`}</td>
              </tr>
              <tr className="spec">
                <td>{`Skin: ${waifu.skintone}`}</td>
                <td>{`Cupsize: ${waifu.cupsize}`}</td>
                <td>{`Hair Color: ${waifu.hairColor}`}</td>
              </tr>
              <tr>
                <td colSpan="3">
                  {`She is a ${waifu.disposition} ${waifu.attribute} and ${waifu.vice}.`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CardSpec;
