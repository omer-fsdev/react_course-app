
import React from 'react'
import { Button } from 'react-bootstrap'

const MyButton = () => {
  return (
    <div className='text-end me-3 mt-2 mb-5'>
      <Button className='btn border border-dark bg-light text-primary px-5 py-3 m-2 fw-bold shadow'>Open</Button>
      <Button className='btn border border-dark bg-light text-primary px-5 py-3 m-2 fw-bold shadow'>Close</Button>
      <Button className='btn border border-dark bg-light text-primary px-5 py-3 m-2 fw-bold shadow'>Delete</Button>
    </div>
  )
}

export default MyButton