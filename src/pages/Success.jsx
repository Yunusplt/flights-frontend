import React from 'react'
import successImg from "../img/success.png"

const Success = () => {
  return (
    <div className='success' >
        <p>Your flight has been booked successfully! Have a great trip! ✖️</p>
        <img src={successImg} alt="successImg" />
    </div>
  )
}

export default Success