# 🧩ReactStudy🧩

## 0. Progress
1. 생활코딩 - 리액트 기초 강좌 수강 완료 (~2020.08.24)
2. 배운 내용을 활용해서 간단한 페이지 만들어보기 (~2020.08.25)

<br>
아래는 생활코딩 리액트 기초 강좌를 들으며 정리한 내용입니다.
<br><br>

## 1. About React
> 자바스크립트 라이브러리의 하나로써 사용자 인터페이스를 만들기 위해 사용된다. <br>
가장 큰 특징은 사용자 정의 태그(컴포넌트)를 만들어주는 기술이라는 것.

#### (1) 컴포넌트를 사용했을 때의 장점
  * 가독성이 높음(태그명만으로 구조를 표현 가능)
  * 재사용성이 높음
  * 유지보수가 쉬움


#### (2) JSX
  * JSX 문법에도 익숙해져야 한다! 변수를 넣을 때는 중괄호{} 안에 담아야 함을 기억하자.


#### (3) 실행 및 배포
  * 로컬에서 실행 화면을 확인할 경우 : npm run start 사용 <br>
  * 배포할 경우 : npm run build 사용(무의미한 공백 등을 없애 용량을 최소한으로 줄임)


#### (4) 가상 돔
  * Document Object Model : 문서 객체 모델(HTML 단위 하나하나를 객체로 생각한 모델)
  * 렌더트리가 매번 재생성되는 것은 좋지 않음. 따라서 가상 돔은 변화를 가상 돔에서 미리 인지해 변화시킴.
  * 이 작업은 실제 DOM 아니기 때문에 랜더링되지 않고 연산 비용이 실제 DOM보다는 적음.
  * 이 가상 DOM의 변화를 마지막에 실제 DOM에게 던져주어, 모든 변화를 한 번에 랜더링 되게 함.
  * 즉, 가상 돔은 바뀌지 않은 부분과 바뀐 부분을 자동으로 감지해서 업데이트 시켜준다는 말인데...
  * 사실 생활코딩에서 DOM에 대한 내용은 다루지 않아서 무슨 말인지 정확히는 모르겠음. 더 찾아보기.


#### (5) 폴더 구조
        ReactStudy
            |
            | - public : 가상 DOM이 들어간 빈 껍데기(?) html이 존재하는 폴더
            | - src : 리액트 개발이 이루어지는 메인 폴더
> public/manifest.json : 웹 앱 매니페스트는 사용자가 앱을 볼 것으로 예상되는 영역에 웹 앱이나 사이트를 나타내는 방식을 개발자가 제어하고,
사용자가 시작할 수 있는 항목을 지시하고, 시작 시의 모습을 정의할 수 있는 JSON 파일입니다.(구글에서 정의한 내용)


#### (6) render?
  * 화면에 html 뷰를 생성해주는 역할을 함
  * return으로 받는 값들은 나중에 html 코드로 바뀐다.


#### (7) 함수형과 클래스형
  * 생활코딩에서는 클래스형을 사용해 강의를 진행했음.


#### (8) LifeCycle
  * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
> 나중에 리액트에 어느정도 익숙해지면 찾아보기. 지금은 리액트랑 친해지는게 먼저!

<br>
<br>

## 2. Component

#### (1) 기본 정의
    class Subject extends Component {
       render() {
          return (
            <header> //컴포넌트에서는 하나의 최상위 태그만 사용해야 한다.
              <h1> 타이틀 </h1>
              내용이 어쩌구 저쩌구
            </header>
          );
       }
    }
    
    class App extends Component {
      render() {
        return (
          <div className = "App">
            <Subject></Subject>   //이런 식으로 임의의 태그를 정의해 사용할 수 있다. 이 부분에 위에 작성한 Subject의 코드가 적용된다.
          </div>
        );
      }
    }
    
    export default App;

<br>

#### (2) 파일의 분리
라우팅이랑 비슷한 개념인 듯. Subject.js 파일에 Subject 코드를 옮겨놓고 App.js에서 해당 경로를 import해주면 App에서 그대로 사용 가능하다.

    import Subject from "./components/Subject";

> 단 파일을 분리할 경우 Subject 코드에 필요한 요소들은 Subject.js에서 모두 import 해주어야 오류가 나지 않는다.

<br>
<br>

## 3. State & Props

  * state : 하나의 컴포넌트가 가질 수 있는 변경 가능한 데이터. 내부적으로 필요한 데이터나 상태는 state를 통해 관리한다.
  * props : 현재 컴포넌트 내에서는 변경이 불가능하다.
  * state와 props 모두 하위 컴포넌트에 상속이 가능하다.

![props](https://user-images.githubusercontent.com/55133871/91205197-200f0580-e740-11ea-9ff6-1dd600f1ab87.jpg)
> 내부적으로 필요한 데이터나 상태는 state를 통해 관리한다.<br>
props와 state 모두 render 함수 호출을 유도하기 때문에, UI가 변경되어야 하는 부분에서 적절하게 활용해야 한다.<br>
props의 read-only의 의미 : 사용하는 쪽에서는 props를 변경 가능하지만, 컴포넌트 내부에서는 전달 받은 props을 수정할 수 없다. <br>
상위 컴포넌트에서 하위 컴포넌트의 state를 바꿀 때는 props 사용<br>
하위 컴포넌트에서 상위 컴포넌트의 state를 바꿀 때는 event 사용 <br>
외부에서는 props를 통해서 컴포넌트 내부의 state를 제어<br>
컴포넌트는 props와 state의 영향에 따라서 실제 DOM에 영향을 줘 UI가 그려짐

<br>

#### (1) constructor
component가 실행될 때, render 함수보다 먼저 실행되면서 component를 초기화하고 싶을 때 constructor를 사용한다.

    class App extends Component {
      constructor(props){ //props를 활용(같은 컴포넌트를 다른 내용으로 재사용)
        super(props);
        this.state = {
          subject:{title:'WEB', sub:'World Wide Web!'},  //외부에서 내부 정보가 보이지 않도록 은닉하는 것이 재사용성의 핵심
          //여러개의 state를 정의할 경우 배열 사용
          content:[
            {id : 1, title:'HTML', desc:'HTML is for information'},
            {id : 2, title:'CSS', desc:'CSS is for design'},
            {id : 3, title:'Javascript', desc:'Javascript is for interactive'}
          ]
        }
      }

<br>

#### (2) 부모 -> 자식 값 전달
위에서 작성한 코드처럼 상위 컴포넌트의 state 값을 아래 코드처럼 하위 컴포넌트의 props 값으로 전달 가능

      render() {
        return (
          <div className = "App">
            <Subject
              title = {this.state.subject.title}  //문자가 아닌 코드로 인식되려면 큰따옴표 말고 중괄호 사용
              sub = {this.state.subject.sub}>
            </Subject>
            <TOC data={this.state.contents}></TOC>
            <Content title = "HTML" desc = "이게되네..신기하네"></Content>
          </div>
        );
      }
    }

<br>

#### (3) key
여러 개의 elements를 자동으로 생성하는 경우 (Warning: Each Child in a list should have a unique "key" prop.)

    class TOC extends Component {
      render() {
        var lists = [];
        var data = this.props.data;
        var i =0;
    
        //임의로 element를 생성하는 과정
        while(i < data.length){
          //react가 내부적으로 구분할 수 있는 장치인 key를 필요로함.
          lists.push(<li key={data[i].id}><a href = {"/content/"+data[i].id}>{data[i].title}</a></li>);
          i = i+1;
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

#### (4) 값이 바뀔 경우
해당 컴포넌트의 state 값이 바뀌면 그 state를 가지고 있는 컴포넌트의 render함수가 재호출됨. (아래 이벤트에서 이 특징을 활용함.)

<br>
<br>

## 4. EVENT

#### (1) onClick
클릭했을 때 변화를 주고 싶은 경우 onClick 안에 함수를 넣어 원하는 코드를 작성하면 된다.

    <header>
      <h1><a href = "/" onClick={function(e){
        e.preventDefault(); //페이지 전환 막기 : a 태그의 기본적인 동작 방법을 금지
        this.setState({
          mode: 'welcome'
        });
      }, bind(this)}>{this.state.subject.title}</a></h1>
    </header>
> 이미 컴포넌트 생성이 끝난 후에 동적으로 state 값을 바꾸고자 할 때는 this.state.어쩌구 = '어쩌구'로 바꾸면 안되기 때문에 setState 사용 <br>
this.state.mode = 'welcome'으로 하면 리액트에서 state가 바뀌었다는 것을 인식하지 못해서 render가 호출되지 않음

<br>

#### (2) bind 함수
render 함수 안에서 this는 그 해당 컴포넌트 그 자체를 가리키는데, function 안에서의 this는 아무 값도 가리키지 않는다.(undefined) <br>
function 내부에서 특정 컴포넌트를 this로 사용하기 위한 방법 중 하나가 bind 함수이다.

    var obj = {'name' : '이름'}
    
    function bindTest() {
      console.log(this.name);
    }
    
    var bindTest2 = bindTest.bind(obj);
    
    할 경우 bind 함수에 의해 obj가 bindTest()의 this가 되는 원리.
   
   
   cf) 흥미로운 점 : bind(a, b)를 사용할 경우 b의 값이 해당 function의 첫 번째 인자 값에 들어간다.

    data-id = {data[i].id}
    onClick = {function(e){
      e.preventDefault();
      this.props.onChangePage(e.target.dataset.id);
      }, bind(this)
    }
    
    onClick = {function(id, e){
      e.preventDefault();
      this.props.onChangePage(e.target.dataset.id);
      }, bind(this, data[i].id)
    }
    
    위의 두 함수는 같은 결과를 보여준다.

<br>

#### (3) 임의의 이벤트 생성
App.js에서 정의한 onChangePage라는 이벤트 함수를 다른 js 파일에서 적용하고 싶을 경우 props를 사용해 가져오면 된다.

    1) App.js
    
      <Subject
        title = {this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage = {function(){
          this.setState({
          mode: 'welcome'
          });
        }.bind(this)}
      >
      </Subject>


    2) Subject.js
    
      onClick = {function(e){
        e.preventDefault();
        this.props.onChangePage(e.target.dataset.id);
        }
      }

> 무엇이 클릭되냐에 따라 나타나는 내용이 바뀌는 페이지여서 클릭되는 요소의 id 값이 필요했기 때문에 e.target.dataset.id를 사용했다.


<br>
<br>

## 5. CRUD를 구현할 때 사용된 기타 개념에 대하여

#### (1) CREATE 했을 때 화면에 새로운 요소 추가하기

      1) onSubmit 이벤트에서 e.target을 사용해 입력받은 값을 props로 보냄

      <form action="/create_process" method="post"
        onSubmit={function(){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
        }.bind(this)}
      >


      2) App.js에서는 onSubmit 이벤트에 e.target.title.value와 e.target.desc.value를 인자로 받아와 state 변경

      _article = <CreateContent onSubmit={function(_title, _desc){
        // add content to this.state.contents
        
        this.max_content_id = this.max_content_id+1;
        
        var _content = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        )
        
        this.setState({
          contents:_content
        });

      }.bind(this)}></CreateContent>

> 새로 입력받은 요소들을 concat으로 추가해서 화면에 보여줌.

<br>

#### (2) shouldComponentUpdate
render 이전에 실행되는 함수로, 여기서 '변화'를 감지하기 위해서 원본을 바꾸지 않고(push) 사본을 수정했다.(concat)

        //render 이전에 실행되는 함수
        shouldComponentUpdate(newProps, newState){  //새롭게 바뀐 값과 이전 값에 접근할 수 있다.
          if(this.props.data === newProps.data){
            return false;
          }else{
            return true;//return값이 true이면 render가 호출되고, false면 호출하지 않는다.
          }
        }
> Array.from()을 사용해 사본을 만든 후 push하는 것도 같은 결과를 낼 수 있다.

<br>

#### (3) 코드 리팩토링
중복해서 사용되는 함수들은 따로 정의해놓거나 미리 초기화해두면 코드가 깔끔해진다.

        constructor(props){
          super(props);
          this.state = {
            title:this.props.data.title
          }

          this.inputFormHandler = this.inputFormHandler.bind(this);
        }

        inputFormHandler(e){
          this.setState({[e.target.name]:e.target.value});
        }

        이렇게 위에 미리 정의해두면 render에서 아래처럼 사용 가능

        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value = {this.props.data.title}
            onChange={this.inputFormHandler}
          >
          </input>
        </p>
