// == Import
import PropTypes from 'prop-types';

import porc from '../App/images/Vache.svg';

import './styles.scss';


// == Composant
const Pictures = ({AnimalsData}) => (
  <div className="container">

    <ul className="container-animals"> {


    AnimalsData.map(

      (animal) => 
        <li className={`container-box-${animal.color}`}>
          {/* {animal.name} */}

        <div className="container-item"> 
          <img 
          src= {animal.picture}
          />
        </div>

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
