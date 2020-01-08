import React from 'react'
import './Playedgame.css'
import PropTypes from "prop-types";
import axios from 'axios'


export default class Playedgame extends React.Component {
    static propTypes = {
        matchs: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        data: []
      };

    constructor(props) {
        super(props)

        console.log(props.playtime);
        

        this.state = {
            team: "meisterboi",
            damage: 0,
            kill:0,
            status: "win",
            score: 0,
            created_at: new Date(props.created_at),
            playtime: new Date(props.playtime),
        }

        
    }
    


    render() {
        const data = this.props;
        /*this.setState({
            playtime: data.playtime
        });*/
        

        return (
            <div className="game">
                <div className="game-b game-box">
                    <div className="datatext team">{data.team}</div>
                    <div className="datatext bar"></div>
                    <div className="datatext date">{this.state.created_at.getFullYear()}년 {this.state.created_at.getMonth() + 1}월 {this.state.created_at.getDate() + 1}일</div>
                    <div className="datatext time"> {this.state.created_at.getHours()}시 {this.state.created_at.getMinutes()}분 {this.state.created_at.getSeconds()}초</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">playtime</div>
                    <div className="datatext kill">
                        <div className="datatext date">{this.state.playtime.getUTCDate() - 1}일 {this.state.playtime.getUTCHours()}시간</div>
                        <div className="datatext time">{this.state.playtime.getMinutes()}분 {this.state.playtime.getSeconds()}초</div>
                    </div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">kill</div>
                    <div className="datatext kill">{data.kill}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">damage</div>
                    <div className="datatext damage">{data.damage}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">status</div>
                    <div className="datatext damage">{data.status}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">score</div>
                    <div className="datatext damage">{data.score}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">spawned</div>
                    <div className="datatext damage">{data.spawned}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">score</div>
                    <div className="datatext damage">{data.score}</div>
                </div>
            </div>

        );
    }
}