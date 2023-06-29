import { useState, useRef } from 'react'
import './Upload.scss'


const Upload = () => {
  const [file, setFile ] = useState(null)
  const ref = useRef()
  const openInput = (e) => {
    ref.current.click()
  }
  const upload = () => {
    const formData = new FormData();
    formData.append('file', file);
    console.log('upload: ', file)
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,

    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Handle success or display a success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error or display an error message to the user
      });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    upload()
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