import { useState } from 'react';
import s from '../style'
import {useNavigate } from 'react-router-dom';

const SubmitURL = () => {
    let [url, set_url] = useState('');
    const navigate = useNavigate();
    const fn_get_url = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(url);
            const rjs = await res.json();
            const rss = JSON.stringify(rjs);
            //console.log(rss);
            localStorage.setItem('data', rss);
            console.log(JSON.parse(localStorage.getItem('data')));
            navigate("/jsonReader")
        }catch{
            alert("Json데이터가 아니거나 링크가 잘못되었습니다!")
        }
    }

    return(
        <s.Main>
            <form className='submit' onSubmit={fn_get_url}>
                <input type="text" name="" id="input_url" placeholder='URL' onChange={(e) => {
                    set_url(e.target.value);
                }}/>
                <input type="submit" value="SUBMIT!" className='submit_url'/>
            </form>
        </s.Main>
    );
}

export default SubmitURL;