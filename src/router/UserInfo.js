import React from 'react'
import './UserInfo.css'
import Playedgame from './Playedgame'
import PieChart from 'react-minimal-pie-chart';
import axios from 'axios';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            player: this.props.match.params.id,
            playtime: new Date("0001-01-01T00:00:00"),
            kill:0,
            win_count:0,
            match_count:0,
            loss_count:0
        }
    }

    componentDidMount() {
        const url = `http://donote.co:8000/api/v1/${this.props.match.params.id}/summary/`;

        const response = axios.get(url).then((res) => {
            console.log(res);

            console.log(res.data.total);
            this.setState({
                playtime: new Date(res.data.total.playtime),
                kill: res.data.total.killed,
                win_count:res.data.total.win_count,
                match_count:res.data.total.match_count
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
                            <span className="subtitle">win rating</span>
                            <span className="data">{this.state.match_count}게임</span>
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
                                        value: (this.state.match_count-this.state.win_count)
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
                            {/* <div className="piechartsample">
                                <div className="colorbox win"></div><span>win</span>
                                <div className="colorbox loss"></div><span>loss</span>
                            </div> */}
                            </div>
                        </div>

                        <div className="box">
                            <span className="subtitle">playtime</span>
                            <span className="data">{this.state.playtime.getDate() - 1}일 {this.state.playtime.getHours()}시간 {this.state.playtime.getMinutes()}분 {this.state.playtime.getSeconds()}초</span>
                        </div>
                        <div className="box">
                            <span className="subtitle">kill</span>
                            <span className="data">{this.state.kill}</span>
                        </div>

                    </div>
                    <Playedgame></Playedgame>
                    <Playedgame></Playedgame>
                    <Playedgame></Playedgame>
                </div>
            </div>

        );
    }
}