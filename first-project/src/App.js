import React, { Component } from 'react';
import './App.css';

import GetEmail from "./components/GetEmail";
import Content from "./components/Content";
import ShowImg from "./components/ShowImg";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageNum : 1,
      mode: "welcome",
      isShow: true,
      welcome: { title: "정식 오픈 알림 받기", desc: "이메일을 남겨주시면 스톰의 출시 소식을 가장 먼저 알려드려요!"},
      thankyou: { title: "감사합니다", desc: "빠른 시일 내에 좋은 서비스로 찾아뵙겠습니다" }
    }
  }

  showImg(){
    var img = null;
    if(this.state.pageNum === 1){
      img = <ShowImg
              onClick={function () {
                this.setState({
                  pageNum: 2
                });
              }.bind(this)}
            ></ShowImg>
    }
    return img;
  }

  getContent(){
    var title, desc, words = null;
    if(this.state.mode === "welcome" && this.state.pageNum === 2){
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
      words = <Content title={title} desc={desc}></Content>
    }else if(this.state.mode === "thankyou" && this.state.pageNum ===2){
      title = this.state.thankyou.title;
      desc = this.state.thankyou.desc;
      words = <Content title={title} desc={desc}></Content>
    }
    return words;
  }

  getEmail(){
    var inputbox = null;
    if(this.state.isShow === true && this.state.pageNum === 2){
      inputbox = <GetEmail
                    onSubmit={function () {
                      this.setState({
                        mode: "thankyou",
                        isShow: false
                      });
                    }.bind(this)}
                ></GetEmail>
    }
    return inputbox;
  }

  render() {
    return (
      <div className="App">
        {this.showImg()}
        {this.getContent()}
        {this.getEmail()}
      </div>
    );
  }
}

export default App;
