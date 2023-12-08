import { NavigateFunction, Outlet, useNavigate, useParams } from "react-router-dom";
import MainTapsPage from "../../styled/MainTaps";
import styled from "styled-components";
import LZString from "lz-string";
import { dataUrl } from "../Fn/DataUrl";
import { TapsData, TapsElementParams } from "../../Interface/TapsParameter";

const moveTab = (e:React.MouseEvent<HTMLElement, MouseEvent>, nav:NavigateFunction, index:string) => {
    let target = e.currentTarget;
    let secs = document.querySelectorAll('.select');
    secs.forEach(s => {
        s.classList.remove("select");
    });
    target.classList.add("select");
    nav('/Taps/'+index);
};

const MainTaps = () => {
    const nav = useNavigate();
    return (
        <>
            <MainTapsPage>
                <section onClick={(e) => {
                    moveTab(e, nav, '1');
                }}>
                    <h2>기상 데이터</h2>
                </section>
                <section onClick={(e) => {
                    moveTab(e, nav, '2');
                }}>
                    <h2>직업 데이터</h2>
                </section>
                <section onClick={(e) => {
                    moveTab(e, nav, '3');
                }}>
                    <h2>부동산 데이터</h2>
                </section>
            </MainTapsPage>
            <Outlet />
        </>

    );
}

const MainTapsElementPage = styled.section`
    margin: auto;
    margin-top: 0%;
    width: calc(100% - 4.2rem);
    border: solid 2px #000000;
    border-top: transparent;
`;

const MainTapsElement = (params:TapsElementParams) => {
    const storage = localStorage.getItem(`TpasData${params.index}`);
    const data: [TapsData] = JSON.parse(storage === null ? "[]":storage as string)
    const nav = useNavigate();
    return (
        <MainTapsElementPage>
            <nav onClick={() => {
                let temp = prompt("url을 입력해주세요");
                if(temp !== null ){
                    let temp2 = dataUrl(temp);
                    if(temp2.length === 0){
                        alert("유효한 url이 아닙니다.")
                    }else{
                        nav(`/DBSeeCustom?index=${params.index}&d=${LZString.compressToEncodedURIComponent(encodeURIComponent(temp))}`)
                    }
                }else{
                    alert("url을 입력해주세요!!")
                }
            }}>
                <h2>데이터 추가</h2>
            </nav>
            {data.map(d => {
                let data = LZString.compressToEncodedURIComponent(encodeURIComponent( JSON.stringify(d) as string ));
                return(
                    <nav onClick={() => {nav(data)}}>
                        <h2>{d.name}</h2>
                    </nav>
                )
            })}
        </MainTapsElementPage>
    );
}

export {MainTaps, MainTapsElement};