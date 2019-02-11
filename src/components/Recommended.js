import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

export default class Recommended extends Component {

  state = {
    products: storeProducts
  }
  render() {
    return (
        <ProductConsumer>
            {(value)=>{
                let product = value.products[Math.floor(Math.random() * value.products.length)] || this.state.products[Math.floor(Math.random() * this.state.products.length)];
                return (
                    <div className="py-5">
                    <div className="container">
                    <Title name='' title="Recommended Book" />
                        <div className="row">
                        {
                                <Product key={product.id} product={product} />
                            //   return value.products.map((product) => {
                            //     return <Product key={product.id} product={product} />
                            //   })
                        }
                        </div>
                    </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
  }
}
