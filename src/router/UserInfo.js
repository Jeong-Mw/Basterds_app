import React from 'react'
import './UserInfo.css'
import Playedgame from './Playedgame'
import PieChart from 'react-minimal-pie-chart';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const userdata = `http://donote.co:8000/api/v1/b77c255b90269c87abbedf893e62c7af/match/`
        const obj = {
            body: {},
            headers: {},
            method: 'POST',
            mode: 'no-cors'
        }
        fetch(userdata)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
        // console.log(userdata);
    


        // const obj = JSON.parse(userdata);
        // console.log(obj.most_played);


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
                                    {
                                        color: '#843B94',
                                        title: 'two',
                                        value: 300000
                                    },
                                    {
                                        color: '#9D74A6',
                                        title: 'One',
                                        value: 50000
                                    }
                                ]}
                                // label={function noRefCheck(){}}
                                label
                                labelPosition={50}
                                labelStyle={{
                                    fill: '#121212',
                                    fontFamily: 'sans-serif',
                                    fontSize: '7px'
                                }}
                                lengthAngle={360}
                                lineWidth={100}
                            /></div>
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