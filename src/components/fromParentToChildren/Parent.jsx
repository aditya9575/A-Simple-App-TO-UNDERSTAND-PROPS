import React from 'react';

// This line below is importing the Child component from the './Child' file. The Child component is a named export.
import { Child } from './Child';

export const Parent = () => {
  const color = "red";
  return (

//Now the Child component is being rendered, and it is being passed two props: name and color. and they will be accessible via props 
//in our child component     
    <Child name="Aditya" color={color} />
  );
};