import React from 'react'
import './bodyvedio.css'; 
import vedioBg from '../asset/vediobg.mp4';
import hair from '../asset/hair.png';




const bodyvedio = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
            <video src={vedioBg} autoPlay loop muted/>
        
        <div className="content">
            <h1>Welcome </h1>
            <p>To Hair Salon.</p>
        </div>
        <h1>Service We Offer </h1>
        <div className="hair">
          
            <img src={hair} className='hair12' />
              <div className='hair1'>
                <li><span>Hair Cut</span></li>
                <li><span>Hair Color</span></li>
                <li><span>Hair Extension</span></li>
                <li><span>Specal Occasion</span></li>
              </div>
               
        </div>
        
        


    </div>
    
  )
}

export default bodyvedio