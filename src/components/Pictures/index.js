// == Import
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

import './styles.scss';

// == Composant
const Pictures = () => (


    <div className="container-item">
      <img
        src={animal.picture}
      />      
      <audio
        src={animal.audio}
      />
    </div>


);



// == Export
export default Pictures;
