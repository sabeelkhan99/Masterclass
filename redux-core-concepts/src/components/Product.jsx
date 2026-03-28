import React from 'react'

const Product = ({product}) => {
    const { title, price, image, description } = product;
  return (
    <figure className='product'>
          <img src={image} alt={title} />
          <figcaption>
              <h3>{title}</h3>
              <h4>$ {price}</h4>
              <p>{ description.substring(0,30) }...</p>
          </figcaption>
    </figure>
  )
}

export default Product
