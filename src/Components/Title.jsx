import React from 'react'
import './Title.css'
const Title = () => {
  return (
    <div className='Container'>
      <h1 className='heading'>Chhatrapati Shivaji Maharaj</h1>
        <p className='subheading'>The <span style={{'color':'green' , fontWeight:'bold', fontSize:'1.5rem'}}>King</span> & The founder of <span style={{'color':'orange'  , fontWeight:'bold', fontSize:'1.5rem'}}>Maratha Empire</span>  </p>
    </div>
  )
}

export default Title
