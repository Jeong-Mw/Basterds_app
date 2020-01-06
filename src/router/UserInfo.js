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

                    <div className="box">
                        <h2>rating</h2>
                        <div className="piechart"><PieChart
                            radius={20}
                            animate={true}
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                            ]}
                        /></div>
                        <div className="data">(%)</div>
                    </div>

                    <div className="box">
                        <h2>play time</h2>
                        <div className="data">100%</div>
                    </div>
                    <div className="box">
                        <h2>kill</h2>
                        <div className="data">100%</div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <div className="date">(date)</div>
                            <div className="time">(time)</div>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <div className="date">(date)</div>
                            <div className="time">(time)</div>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <div className="date">(date)</div>
                            <div className="time">(time)</div>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <div className="date">(date)</div>
                            <div className="time">(time)</div>
                        </div>
                    </div>

                    <div className="game">
                        <div className="game-box">
                            <div className="date">(date)</div>
                            <div className="time">(time)</div>
                        </div>
                    </div>                    
                </div>
            </div>
        );
    }
}