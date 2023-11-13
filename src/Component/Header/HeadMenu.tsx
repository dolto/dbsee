import { useNavigate } from "react-router-dom";
import HeadMenuPage from "../../styled/HeadMenuPage";

const HeadMenu = () => {
    const nav = useNavigate();
    return(
        <HeadMenuPage>
            <h1 onClick={(e) => {
                nav('/');
            }}>
                Dbsee
            </h1>
            <br />
            <section id="tap">
                <nav onClick={(e) => {
                nav('#Taps');
                }}>Taps</nav>
                <nav onClick={(e) => {
                nav('#Search');
                 }}>Search</nav>
            </section>
        </HeadMenuPage>
    );
}

export default HeadMenu;