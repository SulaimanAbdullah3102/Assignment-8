import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Product = ({ allproduct }) => {
  const { product_id, product_image, product_title, price } = allproduct;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className='max-w-96 h-56'
            src={product_image}
            alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price : {price}</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary"><Link to={`/product/${product_id}`}>Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  allproduct: PropTypes.object.isRequired
}
export default Product;