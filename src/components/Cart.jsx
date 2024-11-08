import PropTypes from 'prop-types'
import { removefromcartlist } from './addtocartandwishlist';
import { CiTrash } from "react-icons/ci";

const Cart = ({ allproduct }) => {


    const {product_id, product_image, product_title, price,description } = allproduct;

    const handleremovefromcart = (id,price) => {
        removefromcartlist(id,price);
        
    }
    
    return (     

        <div className='border-2 rounded-xl bg-white'>
            <div className='flex justify-between items-center mb-4'>

<div className='flex items-center '>

    <img className='w-[200px] h-[124px] rounded-full mr-5' src={product_image} alt="" />

    <div>
        <p className='text-xl font-semibold mb-2'>{product_title}</p>
        <p className='text-lg font-normal mb-2'>{description}</p>
        <p className='font-semibold'>Price : $ {price}</p>
    </div>
</div>
<button onClick={() => handleremovefromcart(product_id,price)} className='text-2xl text-red-500'><CiTrash /></button>

</div>
        </div>
    );
};

Cart.propTypes = {
    allproduct: PropTypes.object.isRequired
}

export default Cart;