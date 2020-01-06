import React from 'react'
import './Playedgame.css'

export default class Playedgame extends React.Component {
    constructor(props) {
        super(props)
        
    }
    

    render() {
        return (
            <div className="game">
                <div className="game-b game-box">
                    <div className="datatext mode">(meisterboi)</div>
                    <div className="datatext bar"></div>
                    <div className="datatext date">(date)</div>
                    <div className="datatext time">(time)</div>
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