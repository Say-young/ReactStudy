import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/ButtonComponent';
import contents from './sections/questions';
import ResultPage from './ResultPage';

const Wrapper = styled.div`
    display: flex;
    height:100vh;
    justify-content:center;
    align-items:center;
`

const Container = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const Text = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
    margin-bottom: 6.5rem;
    text-align:center;
`

function QuizPage() {

    const [onQuestion, setOnQuestion] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [index, setIndex] = useState(0);

    const [overnight, setOvernight] = useState(0);
    const [active, setActive] = useState(0);
    const [clean, setClean] = useState(0);
    const [owl, setOwl] = useState(0);
    const [result, setResult] = useState(16);

    const findResult = () => {
        let type = '';

        //외박많이 or 집수니
        if (overnight >= 5) {
            type = type + 'W';
        } else {
            type = type + 'H';
        }

        //외향 or 내향
        if (active >= 5) {
            type = type + 'E';
        } else {
            type = type + 'I';
        }

        //청결중요 or 덜중요
        if (clean >= 5) {
            type = type + 'S';
        } else {
            type = type + 'D';
        }

        //올빼미 or 이른취침
        if (owl >= 5) {
            type = type + 'O';
        } else {
            type = type + 'C';
        }

        //조금 더 효율적으로 하는 방법 없으려나
        if (type === 'WESO') setResult(0);
        else if (type === 'WESC') setResult(1);
        else if (type === 'HISO') setResult(2);
        else if (type === 'HISC') setResult(3);
        else if (type === 'WISO') setResult(4);
        else if (type === 'WISC') setResult(5);
        else if (type === 'HESO') setResult(6);
        else if (type === 'HESC') setResult(7);
        else if (type === 'WIDC') setResult(8);
        else if (type === 'WIDO') setResult(9);
        else if (type === 'WEDC') setResult(10);
        else if (type === 'WEDO') setResult(11);
        else if (type === 'HIDC') setResult(12);
        else if (type === 'HIDO') setResult(13);
        else if (type === 'HEDC') setResult(14);
        else if (type === 'HEDO') setResult(15);
    }

    const onClickNextBtn = (key) => {
        //Math.floor(Math.random() * 10)
        //문제 랜덤 출력이 state 동기화가 안돼서 자꾸 밀린다. 이유 찾기.

        //점수 계산
        let point = contents[index].weight * contents[index].answers[key].score;

        //특수한 경우 - 바로 종료
        if (index === 3 && key === 2) {
            //뷰 전환
            setShowResult(true);
            setOnQuestion(false);
        }

        //선택지에 따라 점수 합산
        if (index >= 8) {
            //owl
            setOwl(owl + point);

            if (index === 9) {
                //마지막 단계 - finalNum 넣어주기
                findResult();

                //뷰 전환
                setOnQuestion(false);
                setShowResult(true);
            }
        } else if (index >= 5) {
            //clean
            setClean(clean + point);
        } else if (index >= 2) {
            //active
            setActive(active + point);
        } else {
            //outgoing
            setOvernight(overnight + point);
        }
        //문제 전환
        setIndex(index + 1);
    }

    return (
        <Wrapper>
            <Container isShow={onQuestion}>
                <Text>{contents[index].question.split('\n').map(line => { return (<span>{line}<br /></span>) })}</Text>

                {contents[index].answers.map((answer, i) => (
                    <ButtonComponent
                        key={'answer - ' + i}
                        idx={i}
                        text={answer.text}
                        onclick={onClickNextBtn}
                    />
                ))}
            </Container>
            <ResultPage isShow={showResult} finalNum={result} />
        </Wrapper>
    );
}

export default QuizPage;