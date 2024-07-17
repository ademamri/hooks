import React from 'react'

const Modal = ({setshow,el }) => {
  return (
    <div className='modal'>
  <div className='box-modal'>
   <button onClick={()=>setshow(false)} >X</button>
   <h1>{el.name}</h1>
    <h2>{el.description}</h2></div>
    </div>
  )
}

export default Modal
