import { useState, useRef } from 'react'
import './Download.scss'


const Download = () => {
  const [link, setLink ] = useState('https://wormhole.app/nvjez#KYKTdUCK0SLKZ0AcAl2s4g')
  const [buttonText, setButtonText] = useState('Copy Link')
  const [file, setFile] = useState({
    name: '2o3u4p23j.jpg',
    size: '99.2 kB'
  })

  const ref = useRef()
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setButtonText('Copied!')
    setTimeout(() => {setButtonText('Copy Link')}, 1000)
  }

  return (
  <div className='download'>
    <div className='info'>
      <h2>You've got a file!</h2>
      <div className='file'>
        <div className='up'>
          <h1>1 file</h1>
          <button>Download</button>
        </div>
        <div className='down'>
          <p>{file.name}</p>
          <p>{file.size}</p>
        </div>
      </div>
      <p>Share your file </p>
      <div className='link'>
        <input type='text' value={link} readOnly></input>
        <button onClick={copyToClipboard}>{buttonText}</button>
        <button className='qr-button'>Show QR Code</button>

      </div>
    </div>
    <div className='alternatives'>

    </div>
  </div>
  )
}

export default Download