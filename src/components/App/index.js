// == Import des composants
import Header from '../Header';
import Results from '../Results';

import './styles.scss';
import React, { useState, useEffect } from 'react';

import AnimalsData from '../../data/animals';

// == Composant
const App = () => {
  const [isResponse, setResponse] = useState(false);

  return (
    <div className="app">
      <Header />

      <Results AnimalsData={AnimalsData} setResponse={setResponse} />

    </div>
  );
};

// == Export
export default App;
