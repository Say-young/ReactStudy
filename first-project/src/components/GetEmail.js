import React, { Component } from 'react';
import '../App.css';

class GetEmail extends Component {

    render() {
        return (
            <article>
                <form action="/submit_email" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit();
                    }.bind(this)}
                >
                <p>
                    <input type="text" name="email" className="inputbox"
                    placeholder="이메일을 입력해주세요."></input>
                    
                    <input type="submit" className="emailBtn"></input>
                </p>
                </form>
            </article>
        );
    }
}

export default GetEmail;