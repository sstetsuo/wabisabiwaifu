/* eslint-disable react/prop-types */
import React from 'react';

const AddCard = ({ handleAdd }) => (
  <div>
    <h3>
      What is Wabi Sabi?
    </h3>
    <p className="italics">
    "Pared down to its barest essence, wabi-sabi is the Japanese art of finding beauty in imperfection and profundity in nature... It celebrates cracks and crevices and all the other marks that time, weather, and loving use leave behind. It reminds us that we are all but transient beings on this planet-that our bodies as well as the material world around us are in the process of returning to the dust from which we came. Through wabi-sabi, we learn to embrace liver spots, rust, and frayed edges, and the march of time they represent."
    <br />
    <a href="https://nobleharbor.com/tea/chado/WhatIsWabi-Sabi.htm">Sauce.</a>
    <br />
    <br />
    </p>
    <p>TLDR: your waifu is perfect, flaws and all.</p>
    <h2 className="underline clickable" onClick={handleAdd}>
      Generate a waifu.
    </h2>
  </div>
);

export default AddCard;
