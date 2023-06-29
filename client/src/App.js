import './App.scss'
import { useState, useRef } from 'react'
import Upload from './pages/Upload'
import Ready from './pages/Ready'
import Download from './pages/Download'

const App = () => {
  

  return (

    
    <div className='app' >
      <div className='nav'>
        <h1>Wormhole</h1>
      </div>
        <Upload/>
        {/* <Ready/> */}
        {/* <Download/> */}
      <div className='footer'>

      </div>
    </div>
  );
}

export default App
