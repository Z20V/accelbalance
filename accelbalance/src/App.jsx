import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Registration from './Pages/Registration'
import Autoriz from './Pages/autoriz'
import { Route, Routes } from 'react-router'
import NotFoundPage from './Pages/NotFoundPage'
import General from './Pages/general'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App bg-#0C0517'>
        <Header/>
        <Routes>
          <Route path='/register' element={<Registration />} />
          <Route path='/auth' element={<Autoriz />} />
          <Route path='/general' element={<General />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </div>
  )
}
export default App
