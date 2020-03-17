import React from 'react';
import CardSpec from './cardSpec';
import './card-style.css';

const Cards = () => (
  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4">
        <CardSpec />
      </div>
    </div>
  </div>
);

export default Cards;
