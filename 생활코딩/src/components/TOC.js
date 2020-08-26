import React, { Component } from 'react';

class TOC extends Component {
    //render 이전에 실행된다.
    shouldComponentUpdate(newProps, newState){ //여기서 '변화'를 감지하기 위해서 원본을 변화(push)시키는 것이 아니라 사본을 수정하는 것(concat)
        //newProps.data 바뀐 값(현재 값)
        //this.props.data 바꾸기 전 값
        if(this.props.data === newProps.data){
            return false;
        }
        return true; //return값이 true이면 render가 호출되고, false면 호출하지 않는다.
    }
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push( //react가 내부적으로 구분할 수 있는 장치인 key를 필요로함. 주의.
            <li key={data[i].id}> 
                <a 
                    href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >
                    {data[i].title}
                </a>
            </li>)
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;