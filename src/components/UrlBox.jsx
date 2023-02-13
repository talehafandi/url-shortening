import React, { useState } from 'react';
import '../styles/urlBox.sass';
import urlBg from '../assets/bg-shorten-mobile.svg';
import Url from './Url';
// import bcypt from 'bcryptjs';


const UrlBox = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');
    const [links, setLinks] = useState([]);
    const inputRef = React.useRef(null);
    let lastRequestSendTime = Date.now();

    const onUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleSubmit = (url) => {
        if(!url) {
            setError('Please add a link');
            inputRef.current.classList.add('error');
            return;
        }
        if(Date.now() - lastRequestSendTime < 500) {
            setError('Please wait for 500ms');
            inputRef.current.classList.add('error');
            lastRequestSendTime = Date.now();
            return;
        }
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then(res => res.json())
        .then(data => {
            if(data.ok) {
                const obj = {
                    url,
                    shortened: data.result.full_short_link
                }
                setLinks(prev => [...prev, obj]);
                // console.log(links);
                inputRef.current.classList.remove('error');
                setError('');
            } else {
                setError(data.error);
                inputRef.current.classList.add('error');
            }
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="url-box" >
            <div className="url-box-container">
                <div className="url-input-container">
                    <input  className='url-box-input' 
                        type="text" 
                        value={url} 
                        ref={inputRef}
                        onChange={onUrlChange} 
                        placeholder="Shorten a link here..." 
                        onKeyPress={(e) => e.key === 'Enter' ? handleSubmit(url) : null}/>
                    {error && <p className="error-label">{error}</p>}
                </div>
                <button className="btn-shorten" onClick={() => handleSubmit(url)} >Shorten</button>
                {/* <img src={urlBg} alt="url-bg" className="url-bg"/> */}
            </div>
            <div className="url-box-results">
                { links.length ? links.map((obj) => (
                    <Url key={Math.random() * Math.random()} url={obj.url} shortened={obj.shortened} />
                  ))
                    : null
                }
            </div>
        </div>
    );
    };

export default UrlBox;