import { TapsData } from "../../Interface/TapsParameter";

const dataUrl = (url: string): string[] => {
    //url을 분석해서 어디에 속성값을 넣어야 하는지 체크하는 함수

    if(!url.startsWith("http")){
        alert("url링크가 아닙니다!")
        return [];
    }

    let result: string[] = [];
    let data = url.split('?')[1].split('&');

    data.forEach(d => {
        let arg = d.split('=');
        if (arg.length > 1){
            result.push(arg[0]);
        }
    });

    //console.log(result);
    
    return result;
}

const urlInit = (url: string): string => {
    // 입력한 데이터로 url을 생성
    let resultUrl = url.split('?')[0] + "?";
    let tempData = dataUrl(url);

    tempData.forEach((d, i) => {
        if(i === tempData.length -1)
            resultUrl += d + "=1";
        else
            resultUrl += d + "=1&";
    });

    return resultUrl;
}

const urlData = (data: TapsData): string => {
    // 입력한 데이터로 url을 생성
    let url = data['url'];
    let resultUrl = url.split('?')[0] + "?";
    let tempData = dataUrl(url);

    console.log(data)

    tempData.forEach((d, i) => {
        if(i === tempData.length -1)
            resultUrl += d + "=" + data.result_value[i];
        else
            resultUrl += d + "=" + data.result_value[i] + "&";
    });

    return resultUrl;
}

export { dataUrl, urlData, urlInit};