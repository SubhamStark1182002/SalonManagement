import React from 'react'
import './footer.css'
import face from '../asset/facebook.png'
import insta from '../asset/insta.png'
import link from '../asset/linkdin.png'
import tewat from '../asset/twter.png'


const footer = () => {
  return (
    <div className="footer">
        <div className='sb__footer-section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-link_div'>
                    <h4>For Buisness</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                    <a href='/healthplan'>
                        <p>Health Plan</p>
                    </a>
                    <a href='/individual'>
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb__footer-link_div'>
                    <h4>Resources</h4>
                    <a href='/resources'>
                        <p>Resources Center</p>
                    </a>
                    <a href='/resources'>
                        <p>STV</p>
                    </a>
                </div>
                <div className='sb__footer-link_div'>
                    <h4>Company</h4>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                    <a href='/press'>
                        <p>Press</p>
                    </a>
                    <a href='/cereer'>
                        <p>Career</p>
                    </a>
                    <a href='/contract'>
                        <p>Contract</p>
                    </a>
                </div>
                <div className='sb__footer-link_div'>
                    <h4>Coming soon on</h4>
                    <div className='socalmedia'>
                        <p><img src= {face} alt=''></img></p>
                        <p><img src= {insta} alt=''></img></p>

                        <p><img src= {tewat} alt=''></img></p>
                        <p><img src= {link} alt=''></img></p>
                    </div>
                </div>
            </div>
            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} All right reseved.
                    </p>
                </div>
                <div className='sb__footer-blow-links'>
                    <a href='/terms'><div><p>Term & Conditions</p></div></a>
                    <a href='/trems'><div><p>Privacy</p></div></a>
                    <a href='/terms'><div><p>Security</p></div></a>
                    <a href='/terms'><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>




  )
}

export default footer;