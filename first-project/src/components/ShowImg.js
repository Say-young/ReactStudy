import React, { Component } from 'react';
import '../App.css';
import startPage from './images/startPage.png';

class ShowImg extends Component {

    render() {
        return (
        <article>
            <img src={startPage} alt="startPage" width = "100%"/>
            <p>
                <button className="btn" onClick = {function(){
                    this.props.onClick();
                }.bind(this)}>정식 오픈 알림 받기</button>
            </p>
        </article>
        );
    }
}

export default ShowImg;