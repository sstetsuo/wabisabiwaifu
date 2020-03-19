/* eslint-disable react/prop-types */
import React from 'react';

const AddCard = ({ handleAdd }) => (
  <div>
    <button
      type="button"
      onClick={handleAdd}
      className="btn btn-outline-secondary"
    >
      Generate Waifu
    </button>
  </div>
);

export default AddCard;
