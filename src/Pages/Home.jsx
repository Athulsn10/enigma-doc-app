import React, { useState } from 'react'
import './Home.css'
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'




function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
  return (
    <>
    <div className='d-flex justify-content-center mt-4'>
    <Image width={40} roundedCircle src='./user.png'></Image>
    <button onClick={handleShow} className='btn' style={{border:'none'}}>Share Your Thought Anonymously...</button>
    </div>
    <Modal centered show={show} onHide={handleClose}>
        <div className='d-flex mx-3 my-3'>
        <Image width={50} roundedCircle src='./user.png'></Image>
        <p className='ms-2'>Anonymous User</p>
        </div>
        {/* react-quill */}
        <div className='mx-3'>
          <ReactQuill  
          theme="snow" 
          />
        </div>
       
        <Modal.Footer>
          <Button onClick={handleClose} variant="contained">Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Home