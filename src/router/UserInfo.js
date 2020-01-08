import React from 'react'
import './UserInfo.css'
import Playedgame from './Playedgame'
import PieChart from 'react-minimal-pie-chart';
import axios from 'axios';
import GameList from './GameList'

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            player: this.props.match.params.id,
            playtime: new Date("0001-01-01T00:00:00"),
            kill: 0,
            win_count: 0,
            match_count: 0,
            loss_count: 0,
            total:[],
            insomnia: [],
            overhit: [],
            orangefamily: [],
            meisterboi: [],
            matches: []
        }
    }
    componentDidMount() {
        const url = `http://donote.co:8000/api/v1/${this.props.match.params.id}/summary/`
        const match_url = `http://donote.co:8000/api/v1/${this.props.match.params.id}/match/`

        axios.get(url).then((res) => {
            console.log(res.data);

            this.setState({
                playtime: new Date(res.data.total.playtime),
                kill: res.data.total.killed,
                win_count: res.data.total.win_count,
                match_count: res.data.total.match_count,
                total: res.data.total,
                insomnia: res.data.insomnia,
                overhit: res.data.overhit,
                orangefamily: res.data.orangefamily,
                meisterboi: res.data.meisterboi
            })
        })


        axios.get(match_url).then((res) => {
            this.setState({
                matches: res.data.data
            })

        })


    }

    render() {
        return (
            <div className="UserInfo" >
                <div className="bg-box">

                    <h1 className="username">{this.state.player}</h1>
                    <div className="userinfobox">

                        <div className="box">
                            <span className="subtitle">승률</span>
                            <span className="data">총 {this.state.match_count}게임</span>
                            <div className="piechart"><PieChart
                                animate={true}
                                data={[
                                    {
                                        color: '#843B94',
                                        title: 'one',
                                        value: this.state.win_count
                                    },
                                    {
                                        color: '#9D74A6',
                                        title: 'two',
                                        value: (this.state.match_count - this.state.win_count)
                                    }
                                ]}
                                label={function noRefCheck() { }}
                                label
                                labelPosition={50}
                                labelStyle={{
                                    fill: '#121212',
                                    fontFamily: 'sans-serif',
                                    fontSize: '7px'
                                }}
                                lengthAngle={360}
                                lineWidth={100}
                            />
                            </div>
                        </div>

                        <div className="box">
                            <span className="subtitle">총 플레이 시간</span>
                            <span className="data">{this.state.playtime.getDate() - 1}일 {this.state.playtime.getHours()}시간 {this.state.playtime.getMinutes()}분 {this.state.playtime.getSeconds()}초</span>
                        </div>
                        <div className="box">
                            <span className="subtitle">킬</span>
                            <span className="data">{this.state.kill} 킬</span>
                        </div>

                        
                        <div className="box">
                            <span className="subtitle">점수</span>
                            <span className="data">{this.state.total.score} 점</span>
                        </div>

                        <div className="box">
                            <span className="subtitle">Best play</span>
                            <span className="data">{this.state.total.best_played}</span>
                        </div>

                        <div className="box">
                            <span className="subtitle">insomnia</span>
                            <span className="data">{this.state.insomnia.score}</span>
                        </div>
                        <div className="box">
                            <span className="subtitle">overhit</span>
                            <span className="data">{this.state.overhit.score} </span>
                        </div>

                        <div className="box">
                            <span className="subtitle">orangefamily</span>
                            <span className="data">{this.state.orangefamily.score} </span>
                        </div>

                        <div className="box">
                            <span className="subtitle">meisterboi</span>
                            <span className="data">{this.state.meisterboi.score} </span>
                        </div>
                    </div>
                    <GameList gamelist={this.state.matches}></GameList>
                </div>
            </div>

        );
    }
}