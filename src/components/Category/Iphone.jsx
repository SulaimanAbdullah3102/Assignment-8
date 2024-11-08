import { useLoaderData } from "react-router-dom";
import Product from "../Product";
const Iphone = () => {
    const data = useLoaderData();
    console.log(data);


    const product = data.filter(product => product.category == 'iPhone');

    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    product.map(allproduct => <Product key={allproduct.product_id} allproduct={allproduct}></Product>)
                }
            </div>
        </div>
    );
};

export default Iphone;