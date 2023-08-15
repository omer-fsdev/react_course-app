import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className=' pt-4'>
<Navbar  className="justify-content-center bg-dark p-2 text-light fixed-bottom">

 <p > Copyright {new Date().getFullYear()} </p>
</Navbar>


    </div>
  )
}

export default Footer