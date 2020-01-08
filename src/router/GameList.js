import React, { Component } from 'react'
import Playedgame from './Playedgame'

class GameList extends Component {
    render() {
      const { gamelist } = this.props;
  


      let gameList = gamelist.map(({ damage, killed, spawned, status, score, played_as, playtime, created_at }) => (
          <Playedgame
            kill={killed}
            damage={damage}
            spawned={spawned}
            status={status}
            score={score}
            playtime={playtime}
            team={played_as}
            created_at={created_at}
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