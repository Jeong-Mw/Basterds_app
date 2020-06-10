import React, { Component } from 'react'
import './Reserve.css'


class Reserve extends Component {
    reserve() {
        alert("dd");
    }

    render() {
        return (
            <div className="Reserve">
                <div className="box">
                    <div className="place">
                        <div className="playground" onClick={this.reserve}>운동장</div>
                        <div className="hall" onClick={this.reserve}>강당</div>
                    </div>
                    <button className="btn">예약하기</button>
                </div>
            </div>
        );
    }
}

export default Reserve;