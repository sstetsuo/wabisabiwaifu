/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';

const CardSpec = ({ handleAdd, waifu }) => (
  <div key={waifu.id} className="card text-left" onClick={handleAdd}>
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
  </div>
);

export default CardSpec;
