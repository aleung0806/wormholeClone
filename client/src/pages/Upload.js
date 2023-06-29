import { useState, useRef } from 'react'
import './Upload.scss'


const Upload = () => {
  const [file, setFile ] = useState(null)
  const ref = useRef()
  const openInput = (e) => {
    ref.current.click()
  }
  const upload = (e) => {
    setFile(e.target.files[0])
  }

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
      <input className='input' ref={ref} type="file" onChange={upload}/>

      <p>Or drag and drop</p>
    </div>
  </div>
  )
}

export default Upload