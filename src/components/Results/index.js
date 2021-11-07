// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';



import './styles.scss';

// == Composant
const Results = ({ AnimalsData, handleClick }) => {

  // let audio = new Audio('sons/Ane.mp3');

  const start = (son) => {
    new Audio(son).play(); 
  }

  const test = ({AnimalsData}) => {

    AnimalsData.map(
      (animal) => {
      console.log(animal); 
      return <div>animal</div>; 
    })
  }

  const [song, setSong] = useState('');
  const [play, {stop}] = useSound(song);


  return (
    <div className="container">

      <ul className="container-animals"> {

    AnimalsData.map(

      (animal) => (
        
        <li
      
          onMouseDown={()=> setSong(animal.audio)}
          // onClick={handleClick(animal.audio)}
          onMouseEnter={() => {
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
