// == Import des composants
import Header from '../Header';
import Pictures from '../Pictures';
import Results from '../Results';

import './styles.scss';
import React, { useState, useEffect } from 'react';

import AnimalsData from '../../data/animals';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Pictures AnimalsData={AnimalsData}/> */}
    <Results AnimalsData={AnimalsData} />

  </div>
);

// == Export
export default App;
