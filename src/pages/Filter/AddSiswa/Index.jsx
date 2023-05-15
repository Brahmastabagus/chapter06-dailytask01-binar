import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const Index = ({ addSiswa }) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: "",
    nim: "",
    date: ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    
    addSiswa(data)
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>Add Siswa</Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Siswa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className='mb-3' controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId="validationCustom02">
              <Form.Label>NIM</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="NIM"
                onChange={(e) => setData({ ...data, nim: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId="validationCustom03">
              <Form.Label>Entry Date</Form.Label>
              <Form.Control
                required
                type="date"
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="primary" onClick={handleClose}>
              Save Data
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Index