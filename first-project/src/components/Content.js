import React, { Component } from 'react';
import '../App.css';
import logo from './images/logo.png';

class Content extends Component {
    render() {
        return (
            <article>
                <img src={logo} alt="logo" width = "30%"/>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

export default Content;