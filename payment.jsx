import React, { useState } from 'react'
import'./payment.css'

const payment = () => {
    const[user, setUserData] = useState(
        {
            Name: ' ' , Email: ' ' , Number: ' ' , Service:' '
        }
    );

    let name,value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUserData({...user,[name]: value});
        console.log(user);
    }

    const getdata = async (e) =>
    {
        const{Name , Email , Number , Service} = user;
        e.preventDefault();
        const options = {
            method : 'POST',
            headers : {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name , Email , Number , Service
            })
        }
        const res = await fetch(
            'https://collageproject-460f2-default-rtdb.firebaseio.com/UserData.json',
            options
            )
            console.log(res)
            if(res)
            {
                alert("Message Sent")
            }
            else{
                alert("Error Occured")
            }

    
       
    }
  return (
    <>
    <div className='container'>
        <div className='header'>
            <div className='text'>Payment Details</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <h2>Name</h2><input type='text' placeholder='Name' name='Name' value={user.Name} autoComplete='off' required onChange={data}/>
            </div>
            <div className='input'>
            <h2>Email</h2><input type='text' placeholder='Email Id' name="Email" value={user.Email} autoComplete='off' required onChange={data} />
            </div>
            <div className='input'>
            <h2>Phoneno </h2><input type='phone No' placeholder='Phone Number' name='Number' value={user.Number} autoComplete='off' required onChange={data}/>
            </div>
            <div className='input'>
            <h2> Services </h2><input type='text' placeholder='Service' name='Service' value={user.Service} autoComplete='off' required onChange={data}/>
            </div>
            <div className='submit-container'>
                <div className='submit' onClick={getdata}>Pay</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default payment
