import React from 'react'
import './UserInfo.css'
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
                                animate={true}
                                data={[
                                    { title: 'One', value: 10, color: '#E38627' },
                                    { title: 'Two', value: 15, color: '#C13C37' },
                                ]}
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

                    <div className="game">
                        <div className="game-box">
                            <span className="date">(date)</span>
                            <span className="time">(time)</span>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <span className="date">(date)</span>
                            <span className="time">(time)</span>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <span className="date">(date)</span>
                            <span className="time">(time)</span>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <span className="date">(date)</span>
                            <span className="time">(time)</span>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <span className="date">(date)</span>
                            <span className="time">(time)</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}