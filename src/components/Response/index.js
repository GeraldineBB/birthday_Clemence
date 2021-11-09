// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import './styles.scss';

// == Composant
const Response = ({ AnimalsData}) => {

  const [song, setSong] = useState('sons/Ane.mp3');
  const [play, {stop}] = useSound(song);

  const [isResponse, setResponse] = useState(false); 


  return (
   
    AnimalsData.map(

      (animal) => (
        
        <li
      
          onMouseEnter={()=> setSong(animal.audio)}
          // onClick={handleClick(animal.audio)}
          onClick={() => {
            console.log(animal.audio)
            play()
            setResponse(true); 
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

  );
};

Response.propTypes = {
  AnimalsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Response;
