import { useSearchParams } from "react-router-dom";
import LZString from "lz-string";
import {dataUrl} from "../Fn/DataUrl";
import MainCustomPage from "../../styled/MainCustomUrl";
import { useState } from "react";

const MainCustomUrl = ()=>{
    const [getData, setData] = useSearchParams();
    const data_lz = decodeURIComponent(LZString.decompressFromEncodedURIComponent(getData.get('d') as string));
    const [getJson, setJson] = useState<any>({url: data_lz});

    console.log(data_lz);
    const data = dataUrl(data_lz);
    return(
        <MainCustomPage>
            <hr />
            {data.map(d => {
                //setJson((json: any) => {json[d] = []; return json});
                return(
                    <>
                    <section className="element">
                        <article>
                            {d}: 
                        </article>
                        <input type="text" id={d}/>
                        <input type="button" value="input" onClick={
                            (e) => {
                                let temp = d;
                                let target = document.querySelector('#'+d) as HTMLInputElement;
                                if (target.value === ""){
                                    return;
                                }
                                console.log(getJson);
                                //setJson(getJson);
                                setJson((json:any) => {
                                    if(json[temp] === undefined)
                                        json[temp] = [];
                                    let value = target.value;
                                    json[temp].push(value);
                                    return json;
                                });
                                
                                target.value = "";
                            }
                        }/>
                    </section>
                    {getJson[d] === undefined ? '' : getJson[d].map((e: string) => {
                        console.log(getJson[d]);
                        return (
                            <section className="list">{e}</section>
                        )
                    })}
                    </>
                );
            })}
            <input type="button" value="submit!" onClick={()=>{
                console.log(getJson);
                console.log("커스텀 데이터를 저장할 곳에 이 json을 전송함");
            }
            }/>
        </MainCustomPage>
    );
}

export default MainCustomUrl;