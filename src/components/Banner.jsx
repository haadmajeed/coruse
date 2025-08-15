import React from 'react'
import '../App.css';


const jsx=<div>this is the jsx compoenent</div>

//call it direclt or you can call props and props.header
const Banner = ({HeaderText,children}) => {
  return (
   <header className='row mb-3'>
    <div className='col-7' >
        {HeaderText} 
        {children}
       { jsx}
    </div>
     </header>
  )
}


export default Banner