import { useSearchParams } from "react-router-dom";
import LZString from "lz-string";
import {dataUrl, urlInit} from "../Fn/DataUrl";
import MainCustomPage from "../../styled/MainCustomUrl";
import { useEffect, useState } from "react";
import { TapsData } from "../../Interface/TapsParameter";

const p_init = (data_lz: string, data: string[]): TapsData => {
    let obj: TapsData = {
        name:'',
        params:[],
        params_value:[],
        url:'',
        result_value:[]
    };
    data.forEach(_ => {
        obj.params_value.push([])
    })
    obj.params = data;
    obj.url = urlInit(data_lz);
    console.log(obj);
    return obj;
}

const MainCustomUrl = ()=>{
    const [getData, setData] = useSearchParams();
    const data_lz = decodeURIComponent(LZString.decompressFromEncodedURIComponent(getData.get('d') as string));
    const data = dataUrl(data_lz);
    const [getJson, setJson] = useState<TapsData>(p_init(data_lz, data));

    useEffect(() => {
        console.log(getJson);
      }, [getJson]);
    return (
        <MainCustomPage>
            <hr />
            <h2>url 제목</h2>
            <input type="text" name="name" id="name" />
            <hr />
            <h2>속성</h2>
            {(getJson as TapsData).params.map((p,i) => {
                let _id = i;
                return (
                    <nav key={p+_id}>
                        <h3>{p}:</h3>
                        <input type="text" name={"param"+_id.toString()} id={"param"+_id.toString()} />
                        <input type="button" value="input" onClick={() => {
                            let target = document.querySelector("#param"+_id.toString()) as HTMLInputElement;
                            let msg = target.value;
                            if(msg === "") return;
                            let obj = getJson;
                            obj?.params_value[_id].push(msg);
                            setJson(obj)
                            target.value = "";
                            return;
                        }}/>
                        <ul>
                            {getJson?.params_value[_id].map(d => <li>{d}</li>)}
                        </ul>
                    </nav>
                )
            })}
            <hr />
            <input type="button" value="완료" />
        </MainCustomPage>
    );
}

export default MainCustomUrl;


// const [getData, setData] = useSearchParams();
// const data_lz = decodeURIComponent(LZString.decompressFromEncodedURIComponent(getData.get('d') as string));
// const [getJson, setJson] = useState<any>({url: data_lz});

// console.log(data_lz);
// const data = dataUrl(data_lz);
// return(
//     <MainCustomPage>
//         <hr />
//         {data.map(d => {
//             //setJson((json: any) => {json[d] = []; return json});
//             return(
//                 <>
//                 <section className="element">
//                     <article>
//                         {d}: 
//                     </article>
//                     <input type="text" id={d}/>
//                     <input type="button" value="input" onClick={
//                         (e) => {
//                             let temp = d;
//                             let target = document.querySelector('#'+d) as HTMLInputElement;
//                             if (target.value === ""){
//                                 return;
//                             }
//                             console.log(getJson);
//                             //setJson(getJson);
//                             setJson((json:any) => {
//                                 if(json[temp] === undefined)
//                                     json[temp] = [];
//                                 let value = target.value;
//                                 json[temp].push(value);
//                                 return json;
//                             });
                            
//                             target.value = "";
//                         }
//                     }/>
//                 </section>
//                 {getJson[d] === undefined ? '' : getJson[d].map((e: string) => {
//                     console.log(getJson[d]);
//                     return (
//                         <section className="list">{e}</section>
//                     )
//                 })}
//                 </>
//             );
//         })}
//         <section>
//             <input type="button" value="submit!" onClick={()=>{
//                 console.log(getJson);
//                 console.log("커스텀 데이터를 저장할 곳에 이 json을 전송함");
//             }
//             }/>
//         </section>
//     </MainCustomPage>
// );