import { createElement } from 'react';
import s from '../style'

const DataEle = ({db, need_category}) => {
    let result = <></>;
    let count = 0;
    console.log("type is "+typeof(db));
    console.log(db);
    if(typeof(db) === 'object' && db != null && db != undefined){
        if(Array.isArray(db)){
            if(typeof(db[0]) === 'object'){
                if(Array.isArray(db[0])){
                    result = (
                        <span>어레이인 경우는 없다고 가정하지만 나타난다면 고려</span>
                    );
                }else{
                    result = (
                        <s.DataList>
                            <li className='category'>
                                {Object.entries(db[0]).map(
                                    ([key, _], i) => <span key={i}>{key}</span>
                                )}
                            </li>
                            {db.map((d, i) => {
                                return <DataEle key={i} db={d} need_category={false}></DataEle>
                            })}
                        </s.DataList>
                    )
                }
            }
        }
        else if(Object.keys(db).length > 1){
                result = (
                    <>
                    {need_category ? (
                        <>
                        <li className='category'>
                            {Object.entries(db).map(
                                ([key, _], i) => {
                                    return <span key={i}>{key}</span>
                                }
                            )}
                        </li>
                        <li className='element'>
                            {Object.entries(db).map(
                                ([_, value], i) => {
                                    if (value === null || value === undefined){
                                        return <span key={i} style={{left:`${100 * count}px`}}>null</span>
                                    }
                                    else if(typeof(value) === 'object'){
                                        count += 1;
                                        return <li className='object' key={i}
                                        style={{left:`${100 * i}px`}}>
                                            <DataEle db={value} need_category={true}/>
                                        </li>
                                    }
                                    else if(typeof(value) == 'string'){
                                        if(/^&lt;/.test(value)){
                                            let str = value.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
                                            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
                                            let db = document.createElement('div');
                                            db.innerHTML = str;
                                            //console.log(db);
                                            str = db.textContent;
                                            db.textContent = '';
                                            console.log(str);
                                            let element = <div dangerouslySetInnerHTML={{__html:str}}></div>;
                                            
                                            return <span key={i} style={{left:`${100 * count}px`}}>{element}</span>
                                        }else{
                                            return <span key={i} style={{left:`${100 * count}px`}}>{value}</span>
                                        }
                                    }
                                    else{
                                        return <span key={i} style={{left:`${100 * count}px`}}>{value}</span>
                                    }
                                }
                            )}
                        </li>
                        </>
                    ): <>
                        <li className='element'>
                            {Object.entries(db).map(
                                ([_, value], i) => {
                                    if (value === null || value === undefined){
                                        return <span key={i} style={{left:`${100 * count}px`}}>null</span>
                                    }
                                    else if(typeof(value) === 'object'){
                                        count += 1;
                                        return <li className='object' key={i}
                                        style={{left:`${100 * i}px`}}>
                                            <DataEle db={value} need_category={true}/>
                                        </li>
                                    }
                                    else{
                                        return <span key={i} style={{left:`${100 * count}px`}}>{value}</span>
                                    }
                                }
                            )}
                        </li>
                    </>}
                    
                    </>

                );
            }
        else{
            result = (
            <>
                {Object.entries(db).map(
                    ([_, value], i) => {
                        if(typeof(value) === 'object'){
                            return <DataEle key={i} db={value} need_category={false}/>
                        }
                        else{
                            return <span key={i}>{value}</span>
                        }
                    }
                )}
            </>
            );
        }
    }
    return (
        <>
        {result}
        </>
    )
}

const JsonPage = () => {
    const data = JSON.parse(localStorage.getItem('data'));
    console.log(data);
    return (
        <s.Main>
            <s.DataList
            onClick={(e)=>{
                let parent = e.target;

                while(true){
                    const className = parent.className;
                    if(className != null || className != undefined){
                        if(className == 'ob' || className == 'object'){
                            parent.className = className == 'ob' ? 'object' : 'ob';
                            return;
                        }else{
                            parent = parent.parentNode;
                        }
                    }else{
                        return;
                    }
                }
            }}>
                {<DataEle db={data} need_category={true}/>}
            </s.DataList>
        </s.Main>
    )
}

export default JsonPage;