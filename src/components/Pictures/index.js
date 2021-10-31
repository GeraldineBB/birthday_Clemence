// == Import
import PropTypes from 'prop-types';

import porc from '../App/images/Vache.svg';

import './styles.scss';


// == Composant
const Pictures = ({AnimalsData}) => (
  <div className="app">
    <img src={porc} alt="react logo" />
    <h1>Composant : Pictures</h1>

    <ul className="animals"> {


    AnimalsData.map(

      (animal) => 
        <li>
          {animal.name}
          <img 
          src= {animal.picture}
          />
        </li>


    ) 

    }



    </ul>


  </div>
);

Pictures.propTypes = {
  AnimalsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, 
      picture : PropTypes.string.isRequired, 
    })
  ).isRequired,
}

// == Export
export default Pictures;
