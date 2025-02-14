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
        <div className='texts'>
          <h1>Train, enjoy and<br></br> live the experience</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore assumenda esse placeat tenetur eos nemo eum nihil eligendi? Illo eos consequuntur molestias totam vero cupiditate eius error cum a perspiciatis!</p>
          <a href="">Join Altea Gym</a>
        </div>
      </div>
      
      <div className='bodyContainer1'>
        
      </div>

    </>
  )
}

export default App
