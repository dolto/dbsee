import styled from "styled-components";

const MainCustomPage = styled.main`
    
    width: calc(100% - 4rem);
    margin: auto;
    h2{
        font-size: 1.5rem;
        font-weight: bold;
    }
    h3{
        font-size: 1rem;
        font-weight: bold;
    }
    .element{
        display: flex;
        text-align: center;
        justify-content: center;
        margin-bottom: 0px;
        margin-top: 0.3rem;
    }
    .list{
        text-align: center;
    }
    li{
        cursor: pointer;
    }
`;

export default MainCustomPage;