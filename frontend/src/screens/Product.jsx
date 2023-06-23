import React from 'react'
import products from '../products'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <>
        <Card className='my-3 p-3 rounded'>
            <Link to={`product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant='top'></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`product/${props.product._id}`}>
                <Card.Title as="div">
                    <strong>{props.product.name}</strong>
                </Card.Title>
                </Link>
                <Card.Text>
                    <h3>${props.product.price}</h3>
                    </Card.Text>
            </Card.Body>

        </Card>
    </>
  )
}

export default Product