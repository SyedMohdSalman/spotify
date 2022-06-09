import CreateSongs from './CreateSongs';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import SongDetails from './SongDetails';

function App() {

  return ( 
    <Router>
      <div className="App">
        <Navbar/>   
        <Switch> 

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/create">
            <CreateSongs/>
          </Route>

          <Route path="/song:id">
            <SongDetails/>
          </Route>

        </Switch>  
      </div>
    </Router> 
  );
}

export default App;
