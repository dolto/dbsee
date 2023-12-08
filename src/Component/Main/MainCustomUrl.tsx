import { useNavigate, useSearchParams } from "react-router-dom";
import LZString from "lz-string";
import {dataUrl, urlData, urlInit} from "../Fn/DataUrl";
import MainCustomPage from "../../styled/MainCustomUrl";
import { useEffect, useState } from "react";
import { TapsData } from "../../Interface/TapsParameter";
import getData from "../Fn/GetData";

const p_init = (data_lz: string, data: string[]): TapsData => {
    let obj: TapsData = {
        name:'',
        description: '',
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
    const [_getData, setData] = useSearchParams();
    const data_lz = decodeURIComponent(LZString.decompressFromEncodedURIComponent(_getData.get('d') as string));
    const data = dataUrl(data_lz);
    const [getJson, setJson] = useState<TapsData>(p_init(data_lz, data));
    const nav = useNavigate();

    useEffect(() => {
        console.log(getJson);
      }, [getJson]);
    return (
        <MainCustomPage>
            <hr />
            <h2>url 제목</h2>
            <input type="text" name="Tname" id="Tname" />
            <hr />
            <h2>url 설명</h2>
            <input type="text" name="Tdescript" id="Tdescript" />
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
                            let obj = JSON.parse(JSON.stringify(getJson));
                            obj?.params_value[_id].push(msg);
                            setJson(obj)
                            target.value = "";
                            return;
                        }}/>
                        <ul>
                            {getJson?.params_value[_id].map(d => <li onClick={() => {
                                let dd = d;
                                let obj: TapsData = JSON.parse(JSON.stringify(getJson));
                                let temp = obj?.params_value[_id].filter(f => f !== dd);
                                obj.params_value[_id] = temp;
                                setJson(obj)
                            }}>{d}</li>)}
                        </ul>
                    </nav>
                )
            })}
            <hr />
            <input type="button" value="완료" onClick={() => {
                let Tname = document.querySelector('#Tname') as HTMLInputElement;
                let Tdescript = document.querySelector('#Tdescript') as HTMLInputElement;
                let temp = localStorage.getItem(`TapsData${_getData.get('index')}`) === null ? '[]':localStorage.getItem(`TapsData${_getData.get('index')}`) as string;
                console.log(temp);
                let storage: TapsData[] = JSON.parse(temp);

                let result = getJson;
                result.name = Tname.value;
                result.description = Tdescript.value;
                storage.push(result)
                console.log(storage);
                console.log(JSON.stringify(storage));

                localStorage.setItem(`TapsData${_getData.get('index')}`, JSON.stringify(storage));
                console.log(`TapsData${_getData.get('index')}`);
                console.log(localStorage.getItem(`TapsData${_getData.get('index')}`));
                nav("/Taps/"+_getData.get('index'));
            }}/>
        </MainCustomPage>
    );
}

const MainMakeUrl = () => {
    const [_getData, setData] = useSearchParams();
    const data_lz = decodeURIComponent(LZString.decompressFromEncodedURIComponent(_getData.get('d') as string));
    const data = JSON.parse(data_lz)
    const [getJson, setJson] = useState<TapsData>(data);
    const nav = useNavigate();

    useEffect(() => {
        console.log(getJson);
      }, [getJson]);
    return (
        <MainCustomPage>
            <hr />
            <h2>url 제목</h2>
            <h3>{getJson.name}</h3>
            <hr />
            <h2>속성</h2>
            {(getJson as TapsData).params.map((p,i) => {
                let _id = i;
                return (
                    <nav key={p+_id}>
                        <h3>{p}:</h3>
                        <input type="text" name={"param"+_id.toString()} id={"param"+_id.toString()} />
                        <ul>
                            {getJson?.params_value[_id].map(d => <li onClick={() => {
                                let target = document.querySelector("#param"+_id.toString()) as HTMLInputElement;
                                let dd = d;
                                target.value = dd;
                            }}>{d}</li>)}
                        </ul>
                    </nav>
                )
            })}
            <hr />
            <input type="button" value="완료" onClick={async () => {
                let result = getJson;
                let is_ok = true;
                result.params.forEach((p,i) => {
                    let _id = i;
                    let target = document.querySelector('#param'+_id) as HTMLInputElement;
                    if(target.value === ""){
                        is_ok = false;
                        return;
                    }
                    result.result_value.push(target.value);
                });
                if(!is_ok){
                    alert("빈칸을 전부 채워주세요!");
                    return;
                }

                let msg = urlData(result);
                console.log("msg는 다음과 같음")
                console.log(msg);

                msg = await getData(msg);

                nav('/DBSeePage?d='+LZString.compressToEncodedURIComponent(encodeURIComponent( msg )));
            }}/>
        </MainCustomPage>
    );
}

export {MainCustomUrl, MainMakeUrl};


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