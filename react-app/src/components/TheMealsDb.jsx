import {useState,useEffect} from 'react';

import  axios from 'axios';
import react from '../assets/react.svg'
import img from "../assets/Employee.jpg"
function TheMealsDb(){
    const [foodData,setFoodData]=useState([]);
    const getMeals=async () =>{
        const Response =await axios.get("https://openlibrary.org/search.json?q=java");
        console.log(Response.data.docs);
        setFoodData(Response.data.docs);
    }
    useEffect(()=>{
        getMeals();

    },[])
    return(
        <div>
            {foodData.map((docs)=>{
return(
    <div >
        <img src={react} alt="" />
        <img src={img} alt=''/>
        <div className='data'>
        <h1>{docs.author_key}</h1>
        <p>{ docs.ebook_access}</p>
        <p>{docs.author_name}</p>
        <p>{docs.cover_i}</p>

        <p>{docs.title}</p>
        <p>{docs.first_publish_year}</p>
        <p>{docs.public_scan_b}</p>
        </div>
</div>

)
            })}

        
    </div>
    )
}
export default TheMealsDb;