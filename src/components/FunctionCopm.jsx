import React from 'react'

const FunctionCopm = ({message,myname,children}) => {
    
  return (
    <>
    <h1>{message}</h1>
    <p>{myname}</p>
    <div>{children}</div>
    
    </>
  )
}

export default FunctionCopm