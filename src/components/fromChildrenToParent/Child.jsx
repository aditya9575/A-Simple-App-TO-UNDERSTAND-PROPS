import React from 'react'

export const Child = ({changeColor}) => {
  return (
    <div>
    
    <button onClick= { () => {changeColor("red") } }>  Pass Color From Child TO Parent </button>

    Child
    
    </div>
  )
}
