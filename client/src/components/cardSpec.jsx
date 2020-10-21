import React from 'react';

const CardSpec = ({ handleAdd, waifu }) => (
  <div key={waifu.id} className="clickable" onClick={handleAdd}>
    <div>
      <h2>{waifu.name}</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <p className="label">
                Age
              </p>
              <p className="value">
                {waifu.age}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="label">
                Eye Color
              </p>
              <p className="value">
                {waifu.eyeColor}
              </p>
            </td>
            <td>
              <p className="label">
                Height
              </p>
              <p className="value">
                {waifu.height}
              </p>
            </td>
            <td>
              <p className="label">
                Weight
              </p>
              <p className="value">
                {`${waifu.weight} lbs.`}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="label">
                Skin
              </p>
              <p className="value">
                {waifu.skintone}
              </p>
            </td>
            <td>
              <p className="label">
                Cupsize
              </p>
              <p className="value">
                {waifu.cupsize}
              </p>
            </td>
            <td>
              <p className="label">
                Hair Color
              </p>
              <p className="value">
                {waifu.hairColor}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        {`${waifu.name} likes her hair with ${waifu.hairstyle}.`}
      </p>
      <p>
        <span>{`She is ${waifu.disposition} ${waifu.attribute} `}</span>
        <span className="italics">{`${waifu.vice}.`}</span>
      </p>
    </div>
  </div>
);

export default CardSpec;
