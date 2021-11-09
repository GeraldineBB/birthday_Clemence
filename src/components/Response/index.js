// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import './styles.scss';

// == Composant
const Response = () => (
   
    
    <div className="container-item">
      <h1>{animal.name}</h1>
      <audio
        src={animal.audio}
      />
    </div>


);


// == Export
export default Response;
