import React, { Component } from 'react'
import Playedgame from './Playedgame'

class GameList extends Component {
    render() {
      const { gamelist } = this.props;
  


      let gameList = gamelist.map(({ damage, killed, status, score, played_as, playtime, created_at }) => (
          <Playedgame
            kill={killed}
            damage={damage}
            status={status}
            score={score}
            playtime={playtime}
            team={played_as}
            key={created_at.toString()}
          />
        )
      );
  
      return (
        <div>
          {gameList}    
        </div>
      );
    }
  }
  
  export default GameList;