// == Import des composants
import Header from '../Header';
import Pictures from '../Pictures'; 

import './styles.scss';

import AnimalsData from '../../data/animals'; 


// == Composant
const App = () => (
  <div className="app">
    <Header/>
    <Pictures AnimalsData={AnimalsData}/>
  </div>
);

// == Export
export default App;
