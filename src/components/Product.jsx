import React, { Fragment } from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <Fragment>
      <div className='back-to-results'>
        <Link to='/shop' className='back-to-results-link'>
          Back to Results
        </Link>
      </div>
      <div className='details container bg-white'>
        <div className='details-image'>
          <img src={product.image} alt='Product' />
        </div>
        <div className='details-info'>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className='details-action'>
          <ul>
            <li>Price: ${product.price}</li>
            <li>Status: {product.status}</li>
            <li>
              Qty:{' '}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button>Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
