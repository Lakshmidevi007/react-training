

import {useState,useEffect} from 'react';

import  axios from 'axios';

function Back(){
    const [foodData,setFoodData]=useState([]);
    const getMeals=async () =>{
        const Response =await axios.get("http://localhost:14000/api/view");
        console.log(Response.data.data);
        setFoodData(Response.data.data);
    }
    useEffect(()=>{
        getMeals();

    },[])
    return(
        <div>
            {foodData.map((data)=>{
return(
    <div >
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        </div>


)
            })}

        
    </div>
    )
}
export default Back