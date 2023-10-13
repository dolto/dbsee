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
        </HeadMenuPage>
    );
}

export default HeadMenu;