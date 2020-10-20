/* eslint-disable react/prop-types */
import React from 'react';

const AddCard = ({ handleAdd }) => (
  <div>
    <h2 className="center click" onClick={handleAdd}>
      Generate Waifu
    </h2>
  </div>
);

export default AddCard;
