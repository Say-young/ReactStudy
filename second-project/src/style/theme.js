const size = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

const theme = {
    primary: '#2cff2c',
    darkGray: '#4e4e4e', // motiiv_gray
    gray: '#a7a7a7', // motiiv_gray_2
    lightGray: '#f3f3f3', // motiiv_gray_bg
    // 다크모드 컬러
    keyWordGray: '#6c6c6c',
    darkBg: '#2f2f2f',
    darkBg2: '#161616',

    // 브레이크 포인트
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.tablet})`,
};

export default theme;