// == Import
import PropTypes from 'prop-types';

import React, { useState } from 'react';
import useToggle from 'react-use-toggle';

import useSound from 'use-sound';

import Response from '../Response';
import Pictures from '../Pictures'; 

import './styles.scss';

// == Composant
const Results = ({ AnimalsData }) => {

  const [song, setSong] = useState('sons/Ane.mp3');
  const [play, {stop}] = useSound(song);

  const [isOn, toggleIsOn] = useToggle(); 

  return (
    <div className="container">

      <ul className="container-animals"> {


    AnimalsData.map(

      (animal) => (
        
        // <Response AnimalsData={AnimalsData}/> 
        <li
      
          onMouseEnter={()=> setSong(animal.audio)}
          // onClick={handleClick(animal.audio)}
          onClick={() => {
            console.log(animal.audio)
            play()
            toggleIsOn(); 
          }} 
          onMouseLeave={() => stop()}

          key={animal.name}

          className={`container-box-${animal.color}`}
        >

        <div className="container-item">
          <img
            src={animal.picture}
          /> 
          {isOn && <h1>{animal.name}</h1> }     
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
  setResponse: PropTypes.func, 
};

// == Export
export default Results;
