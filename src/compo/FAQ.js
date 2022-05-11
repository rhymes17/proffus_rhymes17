import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'  

const FAQ = ({ text }) => {
  return (
    <div className='faq'>

        <h4>{text}</h4>
        <AiOutlineDown className='icons' style={{color: 'blue'}}/>
    </div>
  )
}

export default FAQ