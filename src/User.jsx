import React from 'react'

const User = (props) => {
    const clr1 = Math.floor(Math.random()*256)
    const clr2 = Math.floor(Math.random()*256)
    const clr3 = Math.floor(Math.random()*256)
  return (
    <div className='user-card' style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}}>
     <h2> {props.data.name}</h2>
      {props.data.website}<br/> 
    </div>
  )
}

export default User
