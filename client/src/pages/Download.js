import { useState, useRef, useEffect } from 'react'
import './Download.scss'
import { useParams } from 'react-router-dom'
import { fetchFileInfo, downloadFile } from '../services'
const domain = process.env.REACT_APP_DOMAIN


const Download = () => {
  let { id } = useParams()
  const link = `${domain}/${id}`

  const [buttonText, setButtonText] = useState('Copy Link')
  const [url, setUrl] = useState(null)
  const [fileInfo, setFileInfo] = useState(null)

  const ref = useRef(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link)
    setButtonText('Copied!')
    setTimeout(() => {setButtonText('Copy Link')}, 1000)
  }

  useEffect(() => {
    (async () => {
      const info = await fetchFileInfo(id)
      setFileInfo(info)
    })()
  }, [id])

  const download = async () => {
    const data = await downloadFile(id)
    setUrl(URL.createObjectURL(data))
  }

  useEffect(() => {
    if (url !== null){
      ref.current.click()
    }
  }, [url])

  return (

    <div className='download'>
      {fileInfo !== null  &&
      (
        <div>
      <div className='info'>
        <h2>You've got a file!</h2>
        <div className='file'>
          <div className='up'>
            <h1>1 file</h1>
            <button onClick={download}>Download</button>
            {/* eslint-disable-next-line */}
            <a href={url} download={fileInfo.originalname} ref={ref}></a>
          </div>
          <div className='down'>
            <p>{fileInfo.originalname}</p>
            <p>{`${Math.round(fileInfo.size / 1024 / 1024 * 100) / 100} MB`}</p>
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
    </div>
  )
}

export default Download