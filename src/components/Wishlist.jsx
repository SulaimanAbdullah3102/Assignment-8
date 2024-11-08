import PropTypes from 'prop-types'

import { CiTrash } from "react-icons/ci";
import { addTocartlist, removefromwishlist } from './addtocartandwishlist';

const Wishlist = ({ allproduct }) => {

    const { product_id, product_image, product_title, price, description } = allproduct;

    const handleremovefromwish = (id) => {
        removefromwishlist(id);
    }

    const handleaddtocart = (id,price) => {
        removefromwishlist(id);
        addTocartlist(id,price);
    }

    return (
        <div className='border-2 rounded-xl bg-white'>
            <div className='flex justify-between items-center mb-4 space-x-7 px-5'>

                <div className='flex items-center '>

                    <img className='w-[200px] h-[124px] rounded-full mr-5' src={product_image} alt="" />

                    <div>
                        <p className='text-xl font-semibold mb-2'>{product_title}</p>
                        <p className='text-lg font-normal mb-2'>{description}</p>
                        <p className='font-semibold'>Price : $ {price}</p>
                        <button onClick={() => handleaddtocart(product_id,price)} className='btn bg-purple-500 mt-2'>Add to curt</button>
                    </div>
                </div>
                <button onClick={() => handleremovefromwish(product_id)} className='text-2xl text-red-500'><CiTrash /></button>

            </div>
        </div>
    )
};

Wishlist.propTypes = {
    allproduct: PropTypes.object.isRequired
}

export default Wishlist;