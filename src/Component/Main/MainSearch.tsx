import { useNavigate } from "react-router-dom";
import { SearchBarPage } from "../../styled/MainSearchPage";
import { useState } from "react";
import getData from "../Fn/GetData";

// function utf8_to_b64( str ) {
//     return window.btoa(unescape(encodeURIComponent( str )));
//   }
  
//   function b64_to_utf8( str ) {
//     return decodeURIComponent(escape(window.atob( str )));
//   }
const MainSearch = () => {
    const nav = useNavigate();
    const [getUrl, setUrl] = useState<string>();
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
                        data = await getData(getUrl);
                        nav('/DBSeePage?d='+window.btoa(encodeURIComponent( data )));
                    }
                }}/>
            </form>
        </SearchBarPage>
    );
};

export default MainSearch;