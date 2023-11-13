const getData = async (url:string): Promise<string> => {
    let result:string = "";
    
    if(url.startsWith("www")){
        console.log("http추가");
        url = "https://"+url ;
    }
    console.log(url);
    try {
        const res = await fetch(url);
        console.log(res);
        const rjs = await res.json();
        result = JSON.stringify(rjs);
    }catch{
        alert("Json데이터가 아니거나 링크가 잘못되었습니다!");
    }
    return result;
}

export default getData