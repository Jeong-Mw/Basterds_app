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
        if(data.status=='loss'){
            const style = {
 
                backgroundColor : '#000',
                border: '1px solid black',
                
           
              }
        }

        return (
            <div className="game">
                <div className="game-b game-box">
                    <div className="datatext team">{data.team}</div>
                    <div className="datatext bar"></div>
                    <div className="datatext date">{this.state.created_at.getFullYear()}년 {this.state.created_at.getMonth() + 1}월 {this.state.created_at.getDate() + 1}일</div>
                    <div className="datatext time"> {this.state.created_at.getHours()}시 {this.state.created_at.getMinutes()}분 {this.state.created_at.getSeconds()}초</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">플레이 시간</div>
                    <div className="datatext kill">
                        <div className="datatext date">{this.state.playtime.getUTCDate() - 1}일 {this.state.playtime.getUTCHours()}시간</div>
                        <div className="datatext time">{this.state.playtime.getMinutes()}분 {this.state.playtime.getSeconds()}초</div>
                    </div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">게임 결과</div>
                    <div className="datatext damage">{data.status}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">킬</div>
                    <div className="datatext kill">{data.kill}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">데미지</div>
                    <div className="datatext damage">{data.damage}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">점수</div>
                    <div className="datatext damage">{data.score}</div>
                </div>
                <div className="game-b">
                    <div className="datatext datatitletext kill">스폰</div>
                    <div className="datatext damage">{data.spawned}</div>
                </div>
            </div>

        );
    }
}