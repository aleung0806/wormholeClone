import { useState, useRef } from 'react'
import './Upload.scss'
import { useNavigate } from 'react-router';
import { uploadFile } from '../services';

const { v4: uuidv4 } = require('uuid');
const domain = process.env.REACT_APP_DOMAIN


const Upload = () => {
  console.log('domain', domain)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const ref = useRef()
  const openInput = (e) => {
    ref.current.click()
  }
  const upload = async (selectedFile) => {
    const formData = new FormData();
    const uuid = uuidv4()
    formData.append('uploaded_file', selectedFile)
    formData.append('key', uuid)
    setLoading(true)
    await uploadFile(formData)
    
    navigate(`/${uuid}/share`)

  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile.size > 1024 * 1024 * 10){
      console.error('Error:', 'file too big');
    }
    else{
      await upload(selectedFile)
    }
  };

  return (
    <div>
      { loading
      ? <p>uploading file... </p>
      : (
        <div className='upload'>
        <div className='info'>
          <h2>Simple, private file sharing</h2>
        </div>
        <div className='drop'>
          {/* <input type="file" onChange={handleFileChange}/> */}
          <button className='upload-button' onClick={openInput}>
            Select files to send
          </button>
          <input className='input' ref={ref} type="file" onChange={handleFileChange}/>
          <p>Or drag and drop</p>
        </div>
      </div>
      ) 
      }
    </div>
  )
}

export default Upload