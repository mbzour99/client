import './App.css';
import {Router} from '@reach/router'
import Main from './views/Main';
import CreateTeam from './views/CreateTeam';
import PlayerStatus from './components/PlayerStatus';
import PlayersStatus from './views/PlayersStatus';


function App() {
  return (
    <div className="App">

<Router>
            <Main path="/"/>
            <CreateTeam path="/player/addplayer/"/>
            <PlayersStatus path="/status/game/:id"/>
            
</Router>

    </div>
  );
}

export default App;
