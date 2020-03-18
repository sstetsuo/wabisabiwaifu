/* eslint-disable react/prop-types */
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
    const { handleAdd } = this.props;

    return (
      <button type="button" className="card text-left" onClick={handleAdd}>
        <div className="card-body text-dark">
          <h4 className="card-title">{waifu.name}</h4>
          <table className="table">
            <tbody>
              <tr className="spec">
                <td>{`Age: ${waifu.age}`}</td>
                <td>{`Height: ${waifu.height}`}</td>
                <td>{`Weight: ${waifu.weight} lbs.`}</td>
              </tr>
              <tr className="spec">
                <td>{`Skin: ${waifu.skintone}`}</td>
                <td>{`Cupsize: ${waifu.cupsize}`}</td>
                <td>{`Hair Color: ${waifu.hairColor}`}</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="text-spec">
                    {`${waifu.name} likes her hair with ${waifu.hairstyle}.`}
                  </div>
                  <div className="text-flavor">
                    <span>{`She is ${waifu.disposition} ${waifu.attribute} `}</span>
                    <span>{`${waifu.vice}.`}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </button>
    );
  }
}

export default CardSpec;
