import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({p}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {p.image} />
      <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href={"/product/"+p._id}>Add to card</Button>
      </Card.Body>
    </Card>
  )
}

export default Product