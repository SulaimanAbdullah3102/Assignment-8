import { useEffect, useState } from "react";
import Product from "./Product";


const Allproducts = () => {
    const [allproducts , setallProdcuts] = useState([]); 

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setallProdcuts(data))
    },[])
    return (
        <div id="shop" className="mb-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    allproducts.map(allproduct => <Product key={allproduct.product_id} allproduct={allproduct}></Product>)
                }
            </div>
        </div>
    );
};

export default Allproducts;