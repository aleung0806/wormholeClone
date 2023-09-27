import { useState, useRef } from 'react'
import './Ready.scss'
import { useParams } from 'react-router-dom'


const Ready = () => {
  let { id } = useParams()
  const [link, setLink ] = useState(`localhost:3000/${id}`)
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
        <input type='text' readOnly value={link}></input>
        <button onClick={copyToClipboard}>{buttonText}</button>
        <button className='qr-button'>Show QR Code</button>
      </div>
    </div>
    <div className='alternatives'>
    </div>
    <p> Your file will be deleted in 10 minutes.</p>
  </div>
  )
}

export default Ready