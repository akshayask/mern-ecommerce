import React from 'react'
import products from '../products'
import { Card } from 'react-bootstrap'

const Product = (props) => {
  return (
    <>
        <Card className='my-3 p-3'>
            <a href={`product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant='top'></Card.Img>
            </a>
            <Card.Body>
                <a href={`product/${props.product._id}`}>
                <Card.Title as="div">
                    <strong>{props.product.name}</strong>
                </Card.Title>
                </a>
                <Card.Text>
                    <h3>{props.product.price}</h3>
                    </Card.Text>
            </Card.Body>

        </Card>
    </>
  )
}

export default Product