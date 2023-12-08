import styled from "styled-components";

const MainTapsPage = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    width: calc(100% - 4rem);
    margin: auto;
    h2{
        font-size: 1.5rem;
        font-weight: bold;
    }
    section{
        border: solid 2px #000000;
        text-align: center;
        justify-content: center;
        margin-bottom: 0px;
        cursor: pointer;
    }
    .select{
        border-bottom: transparent;
        
    }

`;

export default MainTapsPage;