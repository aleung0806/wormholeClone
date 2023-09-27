import './App.scss'
import { useState, useRef } from 'react'
import Upload from './pages/Upload'
import Ready from './pages/Ready'
import Download from './pages/Download'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  

  return (

    
    <div className='app' >
      <div className='nav'>
        <h1>Wormhole</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Upload /> } />
          <Route path="/:id/share" element={<Ready /> } />
          <Route path="/:id" element={<Download /> } />
        </Routes>
      </Router>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App
