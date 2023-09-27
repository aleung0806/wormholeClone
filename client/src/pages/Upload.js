import { useState, useRef } from 'react'
import './Upload.scss'
import { useNavigate } from 'react-router';

const { v4: uuidv4 } = require('uuid');
  

const Upload = () => {
  const [file, setFile ] = useState(null)
  const navigate = useNavigate()
  const ref = useRef()
  const openInput = (e) => {
    ref.current.click()
  }
  const upload = (selectedFile) => {
    const formData = new FormData();
    const uuid = uuidv4()
    formData.append('uploaded_file', selectedFile)
    formData.append('key', uuid)

    // console.log('formData')
    // for (const entry of formData){
    //   console.log('entry', entry)
    // }

    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    })
    .then((response) => {
      console.log(response.json().message)
      navigate(`/${uuid}/share`)
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle error or display an error message to the user
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('selectedFile', selectedFile)
    if (selectedFile.size > 1024 * 1024 * 10){
      console.error('Error:', 'file too big');
    }
    else{
      setFile(selectedFile)
      upload(selectedFile)
    }
  };

  return (
    
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

export default Upload