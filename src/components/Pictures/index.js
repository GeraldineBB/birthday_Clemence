// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import './styles.scss';

// == Composant
const Pictures = ({ AnimalsData}) => {

  const [song, setSong] = useState('sons/Ane.mp3');
  const [play, {stop}] = useSound(song);

  return (

    AnimalsData.map(

      (animal) => (
        
        
        <li
      
          onMouseEnter={()=> setSong(animal.audio)}
          // onClick={handleClick(animal.audio)}
          onClick={() => {
            console.log(animal.audio)
            play()
            setResponse(false); 
          }} 
          onMouseLeave={() => stop()}

          key={animal.name}

          className={`container-box-${animal.color}`}
        >
          <div className="container-item">
            <h1>{animal.name}</h1>
            <audio
              src={animal.audio}
            />
          </div>

        </li>
      ),

    )

  );
};

Pictures.propTypes = {
  AnimalsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setResponse: PropTypes.func.isRequired, 
};

// == Export
export default Pictures;
