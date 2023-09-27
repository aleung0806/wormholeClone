import { useState, useRef, useEffect } from 'react'
import './Download.scss'
import { useParams } from 'react-router-dom'
import { fetchFileInfo, downloadFile } from '../services'
const Download = () => {
  let { id } = useParams()
  const link = `localhost:3000/${id}`
  const [buttonText, setButtonText] = useState('Copy Link')
  const [url, setUrl] = useState(null)
  const [file, setFileInfo] = useState(null)

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

  }, [])

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
      {file !== null  &&
      (
        <div>
      <div className='info'>
        <h2>You've got a file!</h2>
        <div className='file'>
          <div className='up'>
            <h1>1 file</h1>
            <button onClick={download}>Download</button>
            <a href={url} download={file.originalname} ref={ref}></a>
          </div>
          <div className='down'>
            <p>{file.originalname}</p>
            <p>{`${Math.round(file.size / 1024 / 1024 * 100) / 100} MB`}</p>
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