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
    const { handleAdd, handleSave } = this.props;

    return (
      <div className="card text-left">
        <div className="card-body text-dark">
          <span className="card-title">{waifu.name}</span>
          <span className="text-spec age">{`Age ${waifu.age}`}</span>
          <table className="table">
            <tbody>
              <tr className="spec">
                <td>{`Eye Color: ${waifu.eyeColor}`}</td>
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
        <button id="buttons" type="button" className="btn btn-light" onClick={handleSave}>Yes.</button>
        <button id="buttons" type="button" className="btn btn-light" onClick={handleAdd}>She&apos;s not the one for me.</button>
      </div>
    );
  }
}

export default CardSpec;
