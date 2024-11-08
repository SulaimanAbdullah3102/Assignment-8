
import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import './bg.css';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { addTocartlist, addTowishlist } from "./addtocartandwishlist";

const Details = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);


    const pro = data.find(book => book.product_id == id);


    const { product_title, product_image, price, description, specification, availability, rating } = pro;

    const firstExample = {
        size: 30,
        value: rating,
        edit: false
    };

    

    const handleAddtocart = (id,price) => {
        addTocartlist(id,price);
    }

    

    const handleAddtowishlist = (id) => {
        addTowishlist(id);
    }

    return (
        <div className="bgD mb-48">
            <div className="mb-8 pt-8">
                <h1 className='text-3xl font-bold text-white text-center'>Product Details</h1>
                <p className=' text-center text-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className=" mx-60 bg-white p-7 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-sm rounded-lg shadow-xl mr-5" />
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product_title}</h1>
                        <p className="mb-3">Price : $ {price} </p>
                        {availability ? <p className="border max-w-20 pl-3 rounded-xl border-green-400 text-green-400">In stock</p> : <p className="border max-w-20 pl-3 rounded-xl border-red-400 text-red-400">Out of stock</p>}
                        <p className="py-5 text-gray-600 font-semibold">
                            {description}
                        </p>
                        <p className="font-bold mb-2">Spacification</p>
                        <div >
                            <ol >
                                <li>
                                    {
                                        specification.map((each, idx) =>
                                            <p key={idx}>{each} </p>
                                        )
                                    }
                                </li>
                            </ol>
                        </div>

                        <p>Rating</p>
                        <div className="flex items-center space-x-2">
                            <ReactStars {...firstExample} /> <p>{rating}</p>
                        </div>
                        <div className="flex space-x-3">
                            <button onClick={() => handleAddtocart(product_id,price)} className="btn btn-primary rounded-2xl">Add to cart <IoCartOutline /></button>
                            <button onClick={() => handleAddtowishlist(product_id)} className="text-xl border border-black rounded-full px-3"><CiHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;