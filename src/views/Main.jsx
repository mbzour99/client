import { Link } from '@reach/router';
import React from 'react'
import ListPlayers from '../components/ListPlayers';
// import Form from '../components/Form';

const Main = (props) => {
    
  return (
    <div>
      
            <h2> <Link to={"/"}>List</Link> | <Link to={"/player/addplayer/"}>Add Player</Link> | <Link to={"/status/game/1"}>Status</Link></h2>
            <ListPlayers/>
          
    </div>
  )
}

export default Main;