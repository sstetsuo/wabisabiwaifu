import React from 'react';

const CardSpec = ({ handleAdd, waifu }) => (
  <div key={waifu.id} className="clickable" onClick={handleAdd}>
    <div>
      <h2>{waifu.name}</h2>
      {/* <p>{`Age ${waifu.age}`}</p> */}
      <table>
        <tbody>
          <tr>
            <td>{`Age ${waifu.age}`}</td>
          </tr>
          <tr>
            <td>{`Eye Color: ${waifu.eyeColor}`}</td>
            <td>{`Height: ${waifu.height}`}</td>
            <td>{`Weight: ${waifu.weight} lbs.`}</td>
          </tr>
          <tr>
            <td>{`Skin: ${waifu.skintone}`}</td>
            <td>{`Cupsize: ${waifu.cupsize}`}</td>
            <td>{`Hair Color: ${waifu.hairColor}`}</td>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">
              <div>
                {`${waifu.name} likes her hair with ${waifu.hairstyle}.`}
              </div>
              <div>
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
