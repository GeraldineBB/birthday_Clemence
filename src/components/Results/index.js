// == Import
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import useToggle from 'react-use-toggle';

import useSound from 'use-sound';

import Response from '../Response';

import './styles.scss';

// == Composant
const Results = ({ AnimalsData }) => {
  const [song, setSong] = useState('sons/Ane.mp3');
  const [play, { stop }] = useSound(song);

  const [isOn, toggleIsOn] = useToggle();

  return (
    <div className="container">

      <ul className="container-animals"> {

    AnimalsData.map(

      (animal) => (

        <Response key={animal.audio} animal={animal} />

      ),

    )

    }

      </ul>

    </div>
  );
};

Results.propTypes = {
  AnimalsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Results;
