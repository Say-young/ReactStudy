import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: 27rem;
    height: 4rem;

    border-radius: 1.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${props => props.type === true ? props.theme.primary : props.theme.gray};
    cursor:pointer;
    margin : 1.5rem;
    padding: 1.5rem;

    color:white;
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    font-family:'Spoqa-Han-Sans';
    font-weight: 400;
    font-size:1.5rem;

    :hover{
        background-color: ${props => props.theme.primary};
    }
`


function ButtonComponent({ idx, type, text, onclick }) {

    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );

}

export default ButtonComponent;