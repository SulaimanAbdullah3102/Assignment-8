import bannerpic from '../assets/banner.jpg'
import './bg.css';

const Banner = () => {
    return (
        <div  className='flex flex-col justify-center items-center bg mx-6 pt-14 mb-12'>
            <div className='flex flex-col items-center space-y-8'>
                <h1 className='text-6xl font-bold text-white'>Upgrade Your Tech Accessorize with <br />
                 Gadget Heaven Accessories</h1>

                <p className='text-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                 the coolest accessories, we have it all!</p>
                <div>
                <button  className="btn"><a href="#shop">Shop Now!</a></button>
                </div>
            </div>
            <div>
                <div className='mt-12'>
                    <div className='border-2 p-4 rounded-3xl'>
                    <img className='max-w-3xl rounded-3xl' src={bannerpic} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-28'>
                <h1 className='text-4xl text-black font-bold'>Explore Cutting-Edge Gadgets</h1>
            </div>
        </div>
    );
};

export default Banner;