import s from '../style'

const DataEle = ({db, need_category}) => {
    let result = <></>;
    
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
        }else if(Object.keys(db).length > 1){
                result = (
                    <>
                    {need_category ? (
                        <>
                        <li className='category'>
                            {Object.entries(db).map(
                                ([key, _], i) => {
                                    // if(typeof(value) === 'object'){
                                    //     return <DataEle key={i} db={key} need_category={true}/>
                                    // }
                                    // else{
                                    //     return <span key={i}>{key}</span>
                                    // }
                                    return <span key={i}>{key}</span>
                                }
                            )}
                        </li>
                        <li className='element'>
                            {Object.entries(db).map(
                                ([_, value], i) => {
                                    if (value === null || value === undefined){
                                        return <span key={i}>null</span>
                                    }
                                    else if(typeof(value) === 'object'){
                                        return <DataEle key={i} db={value} need_category={false}/>
                                        // return <span key={i}>Object</span>
                                    }
                                    else{
                                        return <span key={i}>{value}</span>
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
                                        return <span key={i}>null</span>
                                    }
                                    else if(typeof(value) === 'object'){
                                        return <DataEle key={i} db={value} need_category={true}/>
                                        // return <span key={i}>Object</span>
                                    }
                                    else{
                                        return <span key={i}>{value}</span>
                                    }
                                }
                            )}
                        </li>
                    </>}
                    
                    </>

                );
            }else{
                result = (
                <>
                    {Object.entries(db).map(
                        ([key, value], i) => {
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
            <s.DataList>
                {<DataEle db={data}/>}
            </s.DataList>
        </s.Main>
    )
}

export default JsonPage;