import styled from 'styled-components';

const HeadMenuPage = styled.header`
    display: grid;
    grid-template-columns: auto auto auto;
    background-color: #99FFFF;
    width: 100%;
    height: 6rem;
    font-weight: bold;
    text-align: center;
    align-items: center;
    h1{
        color: #3056ff;
        font-size: 2rem;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
        grid-column: 2;
    }
    #tap{
        height: 100%;
        width: 100%;
        display: grid;
        grid-column-start: 1;
        grid-column-end: 4;
        grid-template-columns: 1fr 1fr;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export default HeadMenuPage;