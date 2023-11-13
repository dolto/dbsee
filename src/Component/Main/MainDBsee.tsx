import { useNavigate, useSearchParams } from "react-router-dom";
import { ElementPage, MainSearchPage } from "../../styled/MainSearchPage";
import { ReactNode } from "react";
import LZString from "lz-string";
import { fillterData, fillterResult } from "../Fn/FillterData";

const MainDBsee = () => {
    const [getData, setData] = useSearchParams();
    const nav = useNavigate();
    const data_lzstring = getData.get('d');
    let data:[string,any][] = [];
    if(data_lzstring == null){
        alert('들어온 데이터가 없습니다!!');
        nav('/Taps');
    }
    data = Object.entries(JSON.parse(decodeURIComponent(LZString.decompressFromEncodedURIComponent(data_lzstring as string))));
    return (
        <MainSearchPage>
            {data.map((e,i)=>{
                //console.log(e);
                // console.log(fillterData(e[1]));
                // console.log(e[1]);
                const fn = fillterResult.get(fillterData(e[1])) as (key:string,arg:any,index:number)=>JSX.Element;
                const result = fn(e[0], e[1], i);
                //console.log(result);
                return result;
            })}
        </MainSearchPage>
    )
};

export default MainDBsee;