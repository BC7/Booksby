import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import Title from './Title';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, author, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className='container py-5'>
            <Title title={title}/>
            <div className="detail row">
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-center"><img src={img} className='img-fluid' alt='product'/></div>
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize"><h2>{title}</h2>
            <h4 className="text-uppercase text-muted mt-3 mb-2">by <span className="text-uppercase">{author}</span></h4>
            <h4 className="text-muted">
            <strong>
              price : <span>$</span> {price}</strong></h4>
              <p className="text-capitalize font-weight-bolder mt-3 mb-0">
              Summary:</p>
              <p className="text-muted lead">{info}</p>
              <div>
                <Link to='/'>
                <ButtonContainer>
                  Back to Books
                </ButtonContainer>
                </Link>
                <ButtonContainer
                cart
                disabled = {inCart ? true : false}
                onClick = {() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
                >
                  {inCart ? 'inCart': 'Add to Cart'}
                </ButtonContainer>
                </div></div>
            </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
