import React from 'react'
import products from '../products'
import Product from './Product'
import {Row,Col} from "react-bootstrap"

const ProductList = () => {
  return (
    <>
    <div>ProductList</div>
    <Row>
       {products.map((product) => (
       <Col>
       <Product p={product} />
       </Col>
       ))}
</Row>

    </>
  )
}

export default ProductList