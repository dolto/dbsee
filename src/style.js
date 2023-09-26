import styled from 'styled-components'

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #D9D9D9;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    font-weight: bold;
    text-align: center;
    h1{
        color: purple;
        font-size: 2rem;
        text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
    }
    i{
        margin-left: 1rem;
        justify-self: start;
        transition: 0.3s;
    }
    i:hover{
        color: gray;
    }
`;

const Footer = styled.footer`
    .info {
        display: flex;
        justify-content:space-between;
    }

    p{
        margin: 1rem;
    }
`;

const Main = styled.main`
    background-color: #D9D9D9;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: calc(100% - 3rem);
    max-width: 800px;
    min-height: 250px;

    .submit{
        display: flex;
        flex-direction: column;
        height: 250px;
        justify-content: center;
        align-items: center;
    }

    #input_url{
        width: calc(100% - 2.5rem);
        background-color: #D0D2FF;
        border-radius: 8px;
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
    }
    .submit_url{
        padding: 0.4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        border-radius: 8px;
        font-size: 0.8rem;
        background-color: #C30000;
        color: #D9D9D9;
    }
`;

const DataList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: burlywood;
    margin-left: 1rem;
    /* li{
        margin: 0.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, auto));
    } */
    li span{
        max-height: 2rem;
        overflow: hidden;
    }
    .category {
        background-color: burlywood;
    }
    .element{
        background-color: #D9D9D9;
    }
`;

export default {Header, Footer, Main, DataList};