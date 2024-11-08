import { useLoaderData } from "react-router-dom";
import { BarChart, Bar,XAxis, YAxis,Tooltip, Legend } from "recharts";


const Statistics = () => {
    const data = useLoaderData();

    return (
       <div className="">
         <BarChart 
        width={2050} 
        height={400} 
        data={data} 
        barSize={29}>
            <Tooltip />
            <Legend />
           <XAxis className="text-xs" dataKey="product_title" />
           <YAxis dataKey="price"/> 
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
       </div>
    );
};

export default Statistics;