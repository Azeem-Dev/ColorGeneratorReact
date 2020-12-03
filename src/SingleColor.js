import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hex}) => {
  
  const [alert,setAlert]=useState(false);
  // as rgb is an array so to convert it in a comma
  // separated string we use join function
  const bcg=rgb.join(',')
  const hexColor =rgbToHex(...rgb);
  const hexValue=`#${hex}`;

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setAlert(false);

    },3000);

  },[alert])

  return <article className={`color ${ index>7 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={()=>{
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }}>
    <p className='percent-value'>
      {weight}%
    </p>
    <p className="color-value">{hexValue.toUpperCase()}</p>
    {alert && <p className='alert'>Copied to Clipboard</p>}
  </article>
}

export default SingleColor
