import React from 'react'
import './UserInfo.css'
import Playedgame from './Playedgame'
import PieChart from 'react-minimal-pie-chart';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="UserInfo">
                <div className="bg-box">

                    <h1 className="username">USERNAME</h1>
                    <div className="userinfobox">

                        <div className="box-pie box">
                            <span className="subtitle">win rating</span>
                            <div className="piechart"><PieChart
                                animate={false}
                                data={[
                                    {
                                        color: '#843B94',
                                        title: 'two',
                                        value: 20
                                    },
                                    {
                                        color: '#9D74A6',
                                        title: 'One',
                                        value: 1000
                                    }
                                ]}
                                label={function noRefCheck() { }}
                                labelPosition={50}
                                labelStyle={{
                                    fill: '#121212',
                                    fontFamily: 'sans-serif',
                                    fontSize: '5px'
                                }}
                            /></div>
                            <span className="data">(%)</span>
                        </div>

                        <div className="box">
                            <span className="subtitle">playtime</span>
                            <span className="data">1010</span>
                        </div>
                        <div className="box">
                            <span className="subtitle">kill</span>
                            <span className="data">1010</span>
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