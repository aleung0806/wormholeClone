import { useState, useRef } from 'react'
import './Ready.scss'


const Ready = () => {
  const [link, setLink ] = useState('https://wormhole.app/nvjez#KYKTdUCK0SLKZ0AcAl2s4g')
  const [buttonText, setButtonText] = useState('Copy Link')

  const ref = useRef()
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setButtonText('Copied!')
    setTimeout(() => {setButtonText('Copy Link')}, 1000)
  }

  return (
  <div className='ready'>
    <div className='info'>
      <h2>Your file is ready to share!</h2>
      <p> Copy the link to share your file</p>
      <div className='link'>
        <input type='text' value={link}></input>
        <button onClick={copyToClipboard}>{buttonText}</button>
      </div>
    </div>
    <div className='alternatives'>
      <button className='qr-button'>Show QR Code</button>

    </div>
    <p> Your file will be deleted in 10 minutes.</p>
  </div>
  )
}

export default Ready