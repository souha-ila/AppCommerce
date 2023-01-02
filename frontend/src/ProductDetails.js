import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Col,Row,Image,ListGroup } from 'react-bootstrap';
import products from './products';

const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find((p) => p._id === id)
return( 
    <Row>
<Col>
<Image src={'../'+product.image} alt={product.name} fluid />
</Col>
<Col>
<ListGroup variant='flush'>
<ListGroup.Item>
<h3>{product.name}</h3>
</ListGroup.Item>
<ListGroup.Item>
Description: {product.description}
</ListGroup.Item>
</ListGroup>
</Col>

</Row> 


)
}
export default ProductDetails
