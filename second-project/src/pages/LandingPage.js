import React, { useEffect, useState } from 'react';
import StartPage from './sections/StartPage';
import EndingPage from './sections/EndingPage';


function LandingPage() {

    //모달창 끄고 키는 용
    const [showLoginModalState, setShowLoginModalState] = useState(false);

    //시작 결과 페이지 구분용
    const [showResultState, setShowResultState] = useState(false);
    console.log(showResultState);

    return (
        <>
            <StartPage isShow={showResultState}
                showLoginModalState={showLoginModalState}
                setShowLoginModalState={setShowLoginModalState}
                setShowResultState={setShowResultState} />
            <EndingPage isShow={showResultState} />
        </>
    );
}

export default LandingPage;