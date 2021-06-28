import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Search from './Search'
import Currentcity from './Currentcity'


function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Currentcity/>
      </div>
    </div>
  );
}

export default App;
