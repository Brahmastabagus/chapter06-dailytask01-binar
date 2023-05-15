import React from 'react'
import { Card, Col } from 'react-bootstrap'

const Index = ({data}) => {
  // const [dataLength, setDataLength] = useState(data.length)
  return (
    <>
      <Col className='mb-3'>
        <Card>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{data.nim}</Card.Subtitle>
            <Card.Text>{data.date}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Index