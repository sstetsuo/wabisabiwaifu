import React from 'react';
import Card from './card';
import './card-style.css';

const Cards = () => (
  <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      <div className="col-md-4">
        <Card />
      </div>
      <div className="col-md-4">
        <Card />
      </div>
      <div className="col-md-4">
        <Card />
      </div>
    </div>
  </div>
);

export default Cards;
