import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredwishList, removearry, totalcostcount } from './addtocartandwishlist';
import Cart from './Cart';
import './bg.css';
import Wishlist from './Wishlist';

const Dashboard = () => {
    const [cartitemlist, setCartitemlist] = useState([]);
    const [wishitemlist, setWishitemlist] = useState([]);
    const products = useLoaderData();

    useEffect(() => {
        const storedcartlist = getStoredCartList();


        const cartitem = products.filter(item => storedcartlist.includes(item.product_id));

        setCartitemlist(cartitem);
    }, [])

    

    useEffect(() => {
        const storedwishlist = getStoredwishList();


        const wishitem = products.filter(item => storedwishlist.includes(item.product_id));

        setWishitemlist(wishitem);
    }, [])

    const totalcost = totalcostcount();

    const handlepurchase = () => {
        removearry();
        document.getElementById('my_modal_5').showModal()
    }


    const handlesort = () => {
        const sortcartlist = [...cartitemlist].sort((a, b) => a.price - b.price);
        setCartitemlist(sortcartlist)
    }

    return (
        <div className="flex flex-col items-center bgDash ">
            <div className="">
                <h1 className='text-3xl font-bold text-white text-center rounded-xl'>Dashboard</h1>
                <p className=' text-center text-base text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!</p>
            </div>
            <div >
                <Tabs  >
                    <div>
                        <TabList>
                            <div className='space-x-5 '>
                                <Tab >Cart</Tab>
                                <Tab>Wishlist</Tab>
                            </div>
                        </TabList>
                    </div>
                    <div className='flex justify-between'>
                            <p>Total cost: {totalcost} </p>
                            <button onClick={() => handlesort() }className='btn bg-purple-500'>Sort by price</button>
                            <button onClick={() => handlepurchase()} className='btn bg-purple-500'>Purchase </button>
                            </div>
                    <div className='mt-10'>
                        <TabPanel>

                            <div className="grid grid-cols-1 gap-7 rounded-xl ">
                                {
                                    cartitemlist.map(allproduct => <Cart key={allproduct.product_id} allproduct={allproduct}></Cart>)

                                }

                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 gap-7 rounded-xl ">
                                {
                                    wishitemlist.map(allproduct => <Wishlist key={allproduct.product_id} allproduct={allproduct}></Wishlist>)

                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   <div className='flex flex-col items-center'>
   <h1 className='text-3xl font-bold'>Payment Successfully</h1>
    <h3 className="font-bold text-lg">Thanks for puchasing</h3>
    <p className="py-4">Total : {totalcost}</p>
   </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={ () => location.reload()} className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            </div>
        </div>
    );
};

export default Dashboard;