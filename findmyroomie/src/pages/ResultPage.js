import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import results from './sections/results';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

//아래는 아직 안정함 레이아웃만 나눠놓음
const A = styled.div`
    width:300;
    border : 1px solid black;
`

const B = styled.div`
    width:150;
    border : 1px solid black;
`

const C = styled.div`
    width:150;
    border : 1px solid black;
`

const D = styled.div`
    display: ${props => props.isShow === 16 ? 'none' : 'flex'};
`

function ResultPage({ isShow, finalNum }) {

    //퍼블리싱 어떻게 할지 생각해보기

    return (
        <Wrapper isShow={isShow}>
            <A>
                {results[finalNum].sub}
                {results[finalNum].result}
                {results[finalNum].img}
                {results[finalNum].desc}
            </A>
            <D isShow={finalNum}>
                <B>
                    {results[results[finalNum].GoodRoomie].sub}
                    {results[results[finalNum].GoodRoomie].result}
                </B>

                <C>
                    {results[results[finalNum].BadRoomie].sub}
                    {results[results[finalNum].BadRoomie].result}
                </C>
            </D>
        </Wrapper>
    );
}

export default ResultPage;