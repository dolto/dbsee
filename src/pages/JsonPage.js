import s from '../style'

const DataEle = ({db}) => {
    let result;
    if(typeof(db) === 'object'){
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
                                return <DataEle key={i} db={d}></DataEle>
                            })} 
                        </s.DataList>
                    )
                }

            }
        }else if(Object.keys(db).length > 1){
                result = (
                    <li className='element'>
                        {Object.entries(db).map(
                            ([key, value], i) => {
                                if(typeof(value) === 'object'){
                                    return <DataEle key={i} db={value}/>
                                }
                                else{
                                    return <span key={i}>{value}</span>
                                }
                            }
                        )}
                    </li>
                );
            }else{
                result = (
                <>
                    {Object.entries(db).map(
                        ([key, value], i) => {
                            if(typeof(value) === 'object'){
                                return <DataEle key={i} db={value}/>
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
            {<DataEle db={data}/>}
        </s.Main>
    )
}

export default JsonPage;