import styled from "styled-components";

const MainSearchPage = styled.main`
    display: flex;
    flex-direction: column;
    width: calc(100% - 2rem);
    margin: auto;
    background-color: #CFFFFF;
`;

const SearchBarPage = styled.div`
    display: flex;
    width: calc(100% - 2rem);
    height: 500px;
    margin: auto;
    background-color: #CFFFFF;
    justify-content: center;
    align-items: center;
    form{
        display: block;
        width: 100%;
    }
    #SearchBar{
        width: calc(100% - 2.5rem);
        background-color: #D0D2FF;
        border-radius: 6px;
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
        height: 1.2rem;
    }
    #Submit{
        padding: 0.4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 8px;
        font-size: 0.8rem;
        background-color: #C30000;
        color: #D9D9D9;
    }
`;

export { MainSearchPage, SearchBarPage };