import { NavigateFunction, useNavigate } from "react-router-dom";
import MainTapsPage from "../../styled/MainTaps";

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
    );
}

export default MainTaps;