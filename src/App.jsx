import { useState } from 'react'
import './App.css'
import Header from './Components/HeaderComponent/Header'
import hero from '../src/images/Picture_woman@1x.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <div className='heroSection'>
        <img src={hero} alt="" />
      </div>
    </>
  )
}

export default App
