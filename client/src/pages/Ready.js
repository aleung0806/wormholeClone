import { useState } from 'react'
import './Ready.scss'
import { useParams } from 'react-router-dom'
const domain = process.env.REACT_APP_DOMAIN

const Ready = () => {
  let { id } = useParams()
  const link = `${domain}/${id}`

  const [time, setTime] = useState('5')
  const [downloads, setDownloads] = useState('1')
  const [buttonText, setButtonText] = useState('Copy Link')

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setButtonText('Copied!')
    setTimeout(() => {setButtonText('Copy Link')}, 1000)
  }

  const handleTimeDropdown = (e) => {
    setTime(e.target.value)
  }

  const handleDownloadsDropdown = (e) => {
    setDownloads(e.target.value)
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
    <div className='deleteOptions'>
      <p> Your file will be deleted in </p>
      <select value={time} onChange={handleTimeDropdown}>
        <option value='5' > 5 minutes</option>
        <option value='10'> 10 minutes</option>
        <option value='60'> 60 minutes</option>
      </select>
      <p> or after</p>
      <select value={downloads} onChange={handleDownloadsDropdown}>
        <option value='1' > 1 download</option>
        <option value='5'> 5 downloads</option>
        <option value='10'> 10 downloads</option>
        <option value='100'> 100 downloads</option>

      </select>
      <p>whichever comes first.</p>
    </div>
  </div>
  )
}

export default Ready