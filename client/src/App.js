import './App.scss'
import Upload from './pages/Upload'
import Ready from './pages/Ready'
import Download from './pages/Download'
import {Routes, Route, useNavigate} from 'react-router-dom'

console.log(process.env.NODE_ENV)
const App = () => {
  const navigate = useNavigate()

  return (

    
    <div className='app' >
      <div className='nav'>
        <h1 onClick={() => {navigate('/')}}>Wormhole</h1>
      </div>
        <Routes>
          <Route path="/" element={<Upload /> } />
          <Route path="/:id/share" element={<Ready /> } />
          <Route path="/:id" element={<Download /> } />
        </Routes>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App
