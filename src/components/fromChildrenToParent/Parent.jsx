import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {

const[color,setColor]= useState("default");


const changeColor = (color) => {
setColor(color);
}

  return (
    <div> 
    {"This Is Parent Component Color:" + color}

<Child changeColor={changeColor}/>    
    </div>
  )
}
