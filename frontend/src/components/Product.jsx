import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = (props) => {
  return (
    <>
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image} variant='top'></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${props.product._id}`}>
                <Card.Title as="div" className='product-title'>
                    <strong>{props.product.name}</strong>
                </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value = {props.product.rating} text = {props.product.numReviews}/>
                </Card.Text>
                <Card.Text>
                    <h4>${props.product.price}</h4>
                </Card.Text>
            </Card.Body>

        </Card>
    </>
  )
}

export default Product