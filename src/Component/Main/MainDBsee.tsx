import { useNavigate, useSearchParams } from "react-router-dom";
import { MainSearchPage } from "../../styled/MainSearchPage";

const MainDBsee = () => {
    const [getData, setData] = useSearchParams();
    const nav = useNavigate();
    const data_base64 = getData.get('d');
    let data:any;
    if(data_base64 == null){
        alert('들어온 데이터가 없습니다!!');
        nav('/');
    }else{
        data = decodeURIComponent(window.atob( data_base64 ));
        //data = JSON.parse(data);
    }
    return (
        <MainSearchPage>
            {data}
        </MainSearchPage>
    )
};

export default MainDBsee;