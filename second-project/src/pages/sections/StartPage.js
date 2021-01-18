import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalComponent from '../../components/quiz/ModalComponent';

const Container = styled.div`
    display:${props => props.isShow === false ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:25rem;
`

const Border = styled.div`
    width:34rem;
    height:1rem;
    background-color: #8FA1FF;
`

const Title = styled.div`
    margin-top : 1rem;
    font-family:'Campton';
    font-weight:700;
    font-size:4rem;
    position: relative;
    ${Border}{
        position: absolute;
        z-index:-1;
        top:2rem;
        left:0rem;
    }
`

const SubTitle = styled.div`
    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2rem;
`

const StartQuizBtn = styled.div`
    margin-top : 5rem;
    width:25rem;
    height:10rem;
    background-color: #8FA1FF;
    border-radius:1.5rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    cursor:pointer;

    display:flex;
    justify-content:center;
    align-items:center;
`

const Content = styled.div`
    color:white;
    font-size:1.7rem;
    font-family:'Spoka-Han-Sans';
    font-weight:700;
`

function StartPage({ isShow, showLoginModalState, setShowLoginModalState, setShowResultState }) {

    const hideModal = () => {
        setShowLoginModalState(false);
        //document.body.style.overflow = 'visible';
    };

    const showModal = () => {
        setShowLoginModalState(true);
        //document.body.style.overflow = 'hidden';
    };

    const showResult = () => {
        setShowResultState(true);
    }

    return (
        <Container isShow={isShow}>
            <SubTitle>나와 찰떡 궁합인 룸메이트를 찾아봐요!</SubTitle>
            <Title><Border />find my Roommie</Title>
            <StartQuizBtn onClick={showModal}><Content>테스트를 시작해볼까요?</Content></StartQuizBtn>
            <ModalComponent isShow={showLoginModalState} hideModal={hideModal} showResult={showResult} />
        </Container>
    );
}

export default StartPage;