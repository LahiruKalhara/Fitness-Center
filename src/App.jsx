import { useState } from 'react'
import './App.css'
import Header from './Components/HeaderComponent/Header'
import hero from '../src/images/Picture_woman@1x.png'
import card1 from '../src/images/Icon@1x.png'
import card2 from '../src/images/Icon@1x (1).png'
import card3 from '../src/images/Icon@1x (2).png'
import card4 from '../src/images/Icon@1x (3).png'
import card5 from '../src/images/Icon@1x (4).png'

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
        <h2>Our Reason for Being</h2>
        <p>How can we help you?</p>
        <div className='cardContainer'>
          <div className='card'>
            <img src={card1} alt="" />
            <h5>Providers<br></br>of happiness</h5>
            <h6>Feel good about yourself</h6>
          </div>
          <div className='card'>
            <img src={card2} alt="" />
            <h5>Providers<br></br>of happiness</h5>
            <h6>Feel good about yourself</h6>
          </div>
          <div className='card'>
            <img src={card3} alt="" />
            <h5>Providers<br></br>of happiness</h5>
            <h6>Feel good about yourself</h6>
          </div>
          <div className='card'>
            <img src={card4} alt="" />
            <h5>Providers<br></br>of happiness</h5>
            <h6>Feel good about yourself</h6>
          </div>
          <div className='card'>
            <img src={card5} alt="" />
            <h5>Providers<br></br>of happiness</h5>
            <h6>Feel good about yourself</h6>
          </div>
        </div> 
      </div>

      <div className='bodyContainer2'>
        <h2>Choose your plan</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>architecto blanditiis cupiditate dolorum ea expedita maxime ex amet quas, in eaque?</p>
        <div className='cardContainer'>
          <div className='cards card'>
            <h3>Basic</h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <div className='price'>
              <h4>14.99$</h4>
              <h5>/for 4 Weeks</h5>
            </div>
            <a href="">Get Started</a>
          </div>
          <div className='cards card'>
            <h3>Basic</h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <div className='price'>
              <h4>14.99$</h4>
              <h5>/for 4 Weeks</h5>
            </div>
            <a href="">Get Started</a>
          </div>
          <div className='cards card3'>
            <h3>Basic</h3>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
            <div className='price'>
              <h4>14.99$</h4>
              <h5>/for 4 Weeks</h5>
            </div>
            <a href="">Get Started</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
