import React from 'react'
import NavBar from './NavBar'
import Headers from './Headers'

function Base({title,description,children}) {
  return (
    <div className='main-component'>
        {title}
<main className='main-segment'>
    <NavBar />
    <Headers />
    {children}
</main>
    </div>
  )
}

export default Base