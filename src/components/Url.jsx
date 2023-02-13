import React from 'react'
import '../styles/url.sass'

const Url = ({url, shortened}) => {
    const buttonRef = React.useRef(null);
    const copyToClipboard = () => {
        // buttonRef.current.select();
        // buttonRef.current.classList.add('active');
        buttonRef.current.innerText = 'Copied!';
        navigator.clipboard.writeText(shortened);
        // document.execCommand('copy');
    }
  return (
    <div className='url' >
        <p className='url-link'>{url}</p>
        <p className='url-shortened'>{shortened}</p>
        <button className='btn-copy' ref={buttonRef} onClick={copyToClipboard} >Copy</button>
    </div>
  )
}

export default Url