import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search'
import Currentcity from './Currentcity'
import Currenttemperature from './Currenttemperature'



function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Currentcity/>
        <Currenttemperature/>

      </div>
    </div>
  );
}

export default App;
