import React from 'react'
import './UserInfo.css'
import './Circle.css'

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div class="progress-circle over50 p100">
                <span>100%</span>
                <div class="left-half-clipper">
                    <div class="first50-bar"></div>
                    <div class="value-bar"></div>
                </div>
            </div>
        );
    }
}