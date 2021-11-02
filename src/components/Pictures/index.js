// == Import
import PropTypes from 'prop-types';

import porc from '../App/images/Vache.svg';

import './styles.scss';

// == Composant
const Pictures = ({ AnimalsData }) => {

  let audio = new Audio('${AnimalsData.audio}');

  const start = () => {
    audio.play(); 
  }

  return (
    <div className="container">

      <ul className="container-animals"> {

    AnimalsData.map(

      (animal) => (
        <li
          onClick={start}

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

Pictures.propTypes = {
  AnimalsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Pictures;
