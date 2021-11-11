// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useToggle from 'react-use-toggle';

import useSound from 'use-sound';

import './styles.scss';

// == Composant
const Response = ({ animal }) => {
  const [song, setSong] = useState('sons/Ane.mp3');
  const [play, { stop }] = useSound(song);

  const [isOn, toggleIsOn] = useToggle();

  return (
    <li

      onMouseEnter={() => setSong(animal.audio)}
      onClick={() => {
        console.log(animal.audio);
        toggleIsOn();
        {!isOn && play()};
        {isOn && stop()};
      }}
      onMouseLeave={() => stop()}

      key={animal.name}

      className={`container-box-${animal.color}`}
    >
      {!isOn
        && (
        <div className="container-item">
          <img
            alt="animal"
            src={animal.picture}
          />
        </div>
        )}
      {isOn
        && (
        <div className="container-item">
          <h1>{animal.name}</h1> 
        </div>
        )}

    </li>
  );
};

Response.propTypes = {
  animal: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,

    }),
  ).isRequired,
};

// == Export
export default Response;
