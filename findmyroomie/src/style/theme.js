const size = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

const theme = {
    //컬러
    primary: '#8372F5',
    gray: '#A7A7A7',

    // 브레이크 포인트
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.tablet})`,
};

export default theme;