const dataUrl = (url: string): string[] => {
    //url을 분석해서 어디에 속성값을 넣어야 하는지 체크하는 함수
    let result: string[] = [];
    let data = url.split('?')[1].split('&');

    data.forEach(d => {
        let arg = d.split('=');
        if (arg.length > 1){
            result.push(arg[0]);
        }
    });
    
    return result;
}

export default dataUrl;