// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import './styles.scss';

// == Composant
const Results = ({ AnimalsData }) => {



  const [song, setSong] = useState('sons/Ane.mp3');
  const [play, {stop}] = useSound(song);


  return (
    <div className="container">

      <ul className="container-animals"> {

    AnimalsData.map(

      (animal) => (
        
        <li
      
          onMouseEnter={()=> setSong(animal.audio)}
          // onClick={handleClick(animal.audio)}
          onClick={() => {
            console.log(animal.audio)
            play()
          }} 
          onMouseLeave={() => stop()}

          key={animal.name}

          className={`container-box-${animal.color}`}
        >
          <div className="container-item">
            <img
              src={animal.picture}
            />
            <audio
              src={animal.audio}
            />
          </div>

        </li>
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
  handleClick: PropTypes.func, 
};

// == Export
export default Results;
