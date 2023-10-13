import { Link, useNavigate } from "react-router-dom";
import { ArrayElementPage, Ele, ElementPage } from "../../styled/MainSearchPage";
import LZString from "lz-string";

const fillterData = (arg: any): "object"|"array"|"string"|"other"|"html_content"|"http_url"|"null" => {
    const _type: string = typeof(arg);
    if(_type === "object"){
        if(Array.isArray(arg)){
            return "array";
        }
        else if(arg === null){
            return "null";
        }
        else{
            return "object";
        }
    }
    else if(_type === "string"){
        if(arg.startsWith("&lt;")){
            return "html_content";
        }
        else if(arg.startsWith("http")){
            return "http_url";
        }
        else{
            return "string";
        }
    }
    else if(_type === "undefined"){
        return "null";
    }
    else{
        return "other";
    }
}

const fillterResult: Map<"object"|"array"|"string"|"other"|"html_content"|"http_url"|"null", (key:string,arg:any,index:number) => JSX.Element> = new Map(
    [
        ["string",(key:string,arg:any,index:number) => {
            return (
                <ElementPage key={index}>
                    <span className="key">{key}</span>
                    <span className="value">{arg}</span>
                </ElementPage>
            )
        }],
        ["other",(key:string,arg:any,index:number) => {
            return (
                <ElementPage key={index}>
                    <span className="key">{key}</span>
                    <span className="value">{arg.toString()}</span>
                </ElementPage>
            )
        }],
        ["object",(key:string,arg:any,index:number) => {
            const keys = Object.keys(arg);
            return (
                <div key={index} className="obj">
                    <p className="key">{key}</p>
                    {keys.map((k,i)=>{
                        console.log(fillterData(arg[k]));
                        console.log(arg[k]);
                        const fn = fillterResult.get(fillterData(arg[k])) as (key:string,arg:any,index:number)=>JSX.Element;
                        const result = fn(k, arg[k],i);
                        return result;
                    })}
                </div>
            )
        }],
        ["array", (key:string,arg:any,index:number) => {
            return (
                <div key={index}>
                    <p className="key">{key}</p>
                    <hr />
                    <ArrayElementPage>
                        {(arg as Array<any>).map((v, i) => {
                            let keys = ["null"];
                            let data:any;
                            if(v != null){
                                keys = Object.keys(v);
                                data = JSON.stringify(v);
                            }
                            return (
                                <Ele key={i}>
                                    {keys.map((k,i) => {
                                        const fn = fillterResult.get(fillterData(v[k])) as (key:string,arg:any,index:number)=>JSX.Element;
                                        const result = fn(k, v[k],i);
                                        return result;
                                    })}
                                    <Link to={'/dbsee/DBSeePage?d='+LZString.compressToEncodedURIComponent(encodeURIComponent( data ))}></Link>
                                </Ele>
                            )
                        })}
                    </ArrayElementPage>
                    <hr />
                </div>
            )
        }],
        ["html_content",(key:string,arg:any,index:number) => {
            let str = arg.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            let db = document.createElement('div');
            db.innerHTML = str;
            str = db.textContent;
            db.textContent = '';
            return (
                <div key={index} className="html_content">
                    <p className="key">{key}</p>
                    <hr />
                    <div dangerouslySetInnerHTML={{__html:str}}></div>
                </div>
            )
        }],
        ["http_url",(key:string,arg:any,index:number) => {
            return (
                <ElementPage key={index}>
                    <span className="key">{key}</span>
                    <a className="value" href={arg}>{arg}</a>
                </ElementPage>
            )
        }],
        ["null",(key:string,arg:any,index:number) => {
            return (
                <ElementPage key={index}>
                    <span className="key">{key}</span>
                    <span className="value">null</span>
                </ElementPage>
            )
        }]
    ]
);

export {fillterData, fillterResult} ;