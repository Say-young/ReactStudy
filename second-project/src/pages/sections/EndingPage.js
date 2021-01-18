import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:${props => props.isShow === true ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:30rem;
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
        top:3.7rem;
        left:0.7rem;
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

function EndingPage({ isShow }) {

    return (
        <Container isShow={isShow}>
            <SubTitle>결과 페이지입니다! 아직 로직은 없어요~</SubTitle>
            <Title><Border />나는 OO Roommie!</Title>
        </Container>
    );
}

export default EndingPage;