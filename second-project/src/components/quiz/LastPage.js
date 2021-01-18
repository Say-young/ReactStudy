import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.page === 3 ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin : 2.5rem;
`

const Title = styled.div`

    font-family:'Spoqa-Han-Sans';
    font-weight:700;
    font-size:2.5rem;
    margin-bottom:2rem;
`

const BtnContainer = styled.div`
    display:flex;
    @media ${props => props.theme.mobile} {
        flex-direction:column;
    }
`

const StartQuizBtn = styled.div`
    width:24rem;
    height:20rem;
    background-color: #A7A7A7;
    margin:2rem;
    border-radius:1.5rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    cursor:pointer;

    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        background-color: #8FA1FF;
    }

    @media ${props => props.theme.tablet} {
        width:18rem;
        height:15rem;
        margin:1rem;
    }
    @media ${props => props.theme.mobile} {
        width:18rem;
        height:10rem;
        margin:1rem;
    }
`

const Content = styled.div`
    color:white;
    font-size:1.7rem;
    font-family:'Spoka-Han-Sans';
    font-weight:700;
`

function LastPage({ page, finishTest }) {

    return (
        <Container page={page}>
            <Title>마지막 질문!</Title>
            <BtnContainer>
                <StartQuizBtn onClick={finishTest}><Content>A</Content></StartQuizBtn>
                <StartQuizBtn onClick={finishTest}><Content>B</Content></StartQuizBtn>
            </BtnContainer>
        </Container>
    );
}

export default LastPage;