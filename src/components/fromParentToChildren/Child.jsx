import React from 'react';

//here below we are creating a functional component named Child and passing in the props as a parameter in it 
//The props parameter in the function is an object that contains all the properties passed to the Child component. 
export const Child = (props) => {
  return (
    <div>
      From Parent To Children This is child component 
      <div>{props.name}</div>
      <div>{props.color}</div>
    </div>
  );
};