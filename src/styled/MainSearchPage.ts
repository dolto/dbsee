import styled from "styled-components";

const MainSearchPage = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(100% - 2rem);
    margin: auto;
    background-color: #CFFFFF;
    justify-content: center;
    text-align: center;
    .obj{
        background-color: #c0fcfc;
        width: calc(100% - 2rem);
        margin: auto;
        border: solid 1px #4c3699;
    }
    .html_content{
        //display: table-cell;
        background-color: #f3e0c0;
        width: calc(100% - 2rem);
        margin: auto;
        border: solid 1px #993636;
        text-align: start;
        //justify-content: start;
    }
    .key{
        color: #cf4d4d;
        font-weight: bold;
        font-size: 1rem;
    }
    .value{
        color: #694dcf;
        font-size: 0.8rem;
    }
`;

const SearchBarPage = styled.div`
    display: flex;
    width: calc(100% - 2rem);
    height: 500px;
    margin: auto;
    background-color: #CFFFFF;
    justify-content: center;
    align-items: center;
    text-align: center;
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
        justify-self: center;
        background-color: #C30000;
        color: #D9D9D9;
    }
`;

const ElementPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    a{
        display: contents;
    }
    .key{
        text-align: end;
    }
    .value{
        text-align: start;
    }
`;

const ArrayElementPage = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 10rem);
    width: calc(100% - 2rem);
    grid-gap: 0.25rem;
    justify-content: start;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`

const Ele = styled.div`
    position: relative;
    background-color: #D9D9D9;
    width: 10rem;
    height: 10rem;
    a {
        position: absolute;
        background-color: transparent;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: 0.3s;
    }
    a:hover {
        background-color: #b4acac3b;
    }
    overflow: hidden;
`

export { MainSearchPage, SearchBarPage, ElementPage, ArrayElementPage, Ele };