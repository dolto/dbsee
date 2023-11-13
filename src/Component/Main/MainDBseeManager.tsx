import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarPage } from "../../styled/MainSearchPage";
import LZString from "lz-string";

const MainDBseeManager = () => {
    const nav = useNavigate();
    const [getUrl, setUrl] = useState<string>();
    const [getManager, setManager] = useState<boolean>(false);
    useEffect(()=>{
        if (getManager){
            return;
        }
        const is_manager = prompt("매니저 키코드를 입력해주세요");
        if(is_manager !== "root"){
            nav("/Search");
        }else{
            setManager(true);
        }
    }, [getManager, nav]);
    return (
        <SearchBarPage>
            <form method="get">
                <input type="text" name="SearchBar" id="SearchBar" 
                onChange={(e) => {
                    setUrl(e.currentTarget.value);
                }}/>
                <input type="submit" value="Search" id="Submit"
                onClick={async (e)=>{
                    e.preventDefault();
                    let data:string;
                    if(getUrl == null)
                        alert("url을 먼저 입력해주세요!");
                    else{
                        data = getUrl;
                        nav('/DBSeeCustom?d='+LZString.compressToEncodedURIComponent(encodeURIComponent( data )));
                    }
                }}/>
            </form>
        </SearchBarPage>
    );
};

export default MainDBseeManager;