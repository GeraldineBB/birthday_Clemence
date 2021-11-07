// == Import des composants
import Header from '../Header';
import Pictures from '../Pictures';
import Results from '../Results';

import './styles.scss';
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';



import AnimalsData from '../../data/animals';

// == Composant
const App = () => {

  const [play] = useSound(''); 


  const handleClick= (son)=> {

    setPlay(son); 
    play(); 

  };

  return (
    <div className="app">
      <Header />
      {/* <Pictures AnimalsData={AnimalsData}/> */}
      <Results AnimalsData={AnimalsData} handleClick={handleClick} />

    </div>
  );
};

// == Export
export default App;
