import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import LastPage from './LastPage';
import CancleBtn from '../../assets/CancelBtn.svg';

const ModalBackgorundWrap = styled.div`
  display: ${props => (props.show ? `flex` : `none`)};
  background: black;
  opacity: 0.5;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const CancelBtn = styled.div`
  display: flex;
  background-image:url(${CancleBtn});
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

const NextBtn = styled.div`
  ${props => props.page !== 3 ? `display:flex; cursor:pointer;` : `display:none;`};
  font-weight: 400;
  font-size: 1.5rem;
`;

const PrevBtn = styled.div`
  ${props => props.page !== 1 ? `display:flex; cursor:pointer;` : `display:none;`};
  font-weight: 400;
  font-size: 1.5rem;
`;

const FinBtn = styled.div`
  ${props =>
    props.page === 3 ? `display:flex; cursor:pointer;` : `display:none;`};
  font-weight: 400;
  font-size: 1.5rem;
`;

const IndicatorContainer = styled.div`
  display:flex;
  width:3.6rem;
  justify-content:space-between;
`

const ModalWrap = styled.div`
  display: ${props => (props.show ? `flex` : `none`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color:white;

  padding: 5rem 2.6rem 2.6rem 3rem;
  width: 60rem;;
  height: 38rem;
  border-radius: 2rem;
  box-shadow: 0.2rem 0.3rem 0.7rem rgba(0, 0, 0, 0.15);

  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Spoqa-Han-Sans';
  color: black;

  @media ${props => props.theme.tablet} {
    width: 40rem;
    height: 28rem;
    padding: 4.5rem 2.5rem 2.5rem 3.3rem;
  }
  @media ${props => props.theme.mobile} {
    width: 25rem;
    height: 36rem;
    padding: 5rem 2rem 2rem 2rem;
  }

  ${IndicatorContainer} {
    position: absolute;
    bottom:3.3rem;
    @media ${props => props.theme.mobile} {
        bottom: 2.8rem;
    }
  }
  ${NextBtn} {
    position: absolute;
    right: 2.5rem;
    bottom: 2.5rem;
    @media ${props => props.theme.mobile} {
      bottom: 2rem;
    }
  }
  ${PrevBtn} {
    position: absolute;
    left: 2.5rem;
    bottom: 2.5rem;
    @media ${props => props.theme.mobile} {
      left: 2rem;
      bottom: 2rem;
    }
  }
  ${FinBtn} {
    position: absolute;
    right: 2.5rem;
    bottom: 2.5rem;
    @media ${props => props.theme.mobile} {
      right: 2rem;
      bottom: 2rem;
    }
  }
  ${CancelBtn} {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }
`;


const Indicator = styled.div`
  ${props => props.activeBtn == 'true' ?
    `
    width:1.4rem;
    height:0.5rem;
    background: #8FA1FF;
    border-radius: 0.35rem;
    `
    :
    `
    width:0.5rem;
    height:0.5rem;
    border-radius: 100%;
    background: #A7A7A7;
    opacity: 0.3;
    `
  };
`

const pageData = [
  {
    'first': 'true',
    'second': 'false',
    'last': 'false'
  },
  {
    'first': 'false',
    'second': 'true',
    'last': 'false'
  },
  {
    'first': 'false',
    'second': 'false',
    'last': 'true'
  }
];

function ModalComponent({ hideModal, isShow, showResult }) {

  // 아웃 사이드 클릭
  const myRef = useRef();
  const handleClickOutside = e => {
    if (!myRef?.current?.contains(e.target)) {
      hideModal();
      pageReset();
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const [pageState, setPageState] = useState(1);
  const pageDown = () => {
    if (pageState > 1) {
      setPageState(pageState - 1);
    }
  };
  const pageUp = () => {
    if (pageState < 3) {
      setPageState(pageState + 1);
    }
  };
  const pageReset = () => {
    setPageState(1);
  };

  //테스트 완료
  const finishTest = () => {
    showResult();
    hideModal();
  };

  return (
    <>
      <ModalBackgorundWrap show={isShow} />
      <ModalWrap show={isShow} ref={myRef}>
        <CancelBtn onClick={hideModal} page={pageState} />
        <FirstPage page={pageState} pageUp={pageUp} />
        <SecondPage page={pageState} pageUp={pageUp} />
        <LastPage page={pageState} finishTest={finishTest} />
        <IndicatorContainer>
          <Indicator activeBtn={pageData[pageState - 1].first} />
          <Indicator activeBtn={pageData[pageState - 1].second} />
          <Indicator activeBtn={pageData[pageState - 1].last} />
        </IndicatorContainer>
      </ModalWrap>
    </>
  );
}

export default ModalComponent;