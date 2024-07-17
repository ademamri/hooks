import React, { useState } from 'react'
import Modal from './Modal'

const Card = ({el}) => {
  const [show, setshow] = useState(false)
    return (
    <div>
      {show==true?<Modal el={el} setshow={setshow} />:null}
      <img onClick={()=>setshow(true)} src={el.image} alt="" />
    </div>
  )
}

export default Card
