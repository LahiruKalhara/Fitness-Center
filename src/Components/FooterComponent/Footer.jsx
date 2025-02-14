import React from 'react'
import './Footer.css'
import icons from '../../images/Icons@1x.png'

function Footer() {
  return (
    <>
        <div className='Footer'>
            <div className='left'>
                <h1>ALTEA GYM</h1>
                <img src={icons} alt="" />
                <p>2021 All rights reserved.</p>
            </div>
            <div className='right'>
                <table>
                    <tr>
                        <th>Lorem ipsum</th>
                        <th>Lorem ipsum</th>
                        <th>Lorem ipsum</th>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                        <td></td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem</td>
                    </tr>
                </table>
            </div>
        </div>
    </>
  )
}

export default Footer