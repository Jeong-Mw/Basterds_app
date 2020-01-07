import React from 'react'
import './Playedgame.css'
import PropTypes from "prop-types";

export default class Playedgame extends React.Component {
    static propTypes = {
        data: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        data: []
      };
    

    constructor(props) {
        super(props)

        this.state = {
            kill: 0,
            damage: []
    }
}

    


    render() {
        return (
            <div className="game">
                <div className="game-b game-box">
                    <div className="datatext team">(meisterboi)</div>
                    <div className="datatext bar"></div>
                    <div className="datatext date">(date)</div>
                    <div className="datatext time">{}(time)</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">kill</div>
                    <div className="datatext kill">(kill)</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">damage</div>
                    <div className="datatext damage">(damage)</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">damage</div>
                    <div className="datatext damage">(damage)</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">damage</div>
                    <div className="datatext damage">(damage)</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">damage</div>
                    <div className="datatext damage">(damage)</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">damage</div>
                    <div className="datatext damage">(damage)</div>
                </div>
            </div>

        );
    }
}