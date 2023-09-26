import { useState } from 'react';
import s from '../style'

const SubmitURL = () => {
    let [url, set_url] = useState('');
    const fn_get_url = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(url);
            const rjs = await res.json();
            const rss = JSON.stringify(rjs);
            //console.log(rss);
            localStorage.setItem('data', rss);
            console.log(JSON.parse(localStorage.getItem('data')));

            
        }catch{

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