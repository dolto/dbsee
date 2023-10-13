const getData = async (url:string): Promise<string> => {
    let result:string = "";
    console.log(url);
    try {
        const res = await fetch(url);
        const rjs = await res.json();
        result = JSON.stringify(rjs);
    }catch{
        alert("Json데이터가 아니거나 링크가 잘못되었습니다!");
    }
    return result;
}

export default getData