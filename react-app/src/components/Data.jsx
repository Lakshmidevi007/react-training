import { useState } from 'react';
import axios from "axios"

const Form=()=>{
  const [form,setForm]=useState({
      name:"",
      phone:"",
      email:""  
    });
const [message,setmessage]=useState("");

    const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
     };
    const handleSubmit= async(e)=>{
      e.preventDefault();
    try {
      const res = await axios.post("http://localhost:14000/api/add",form);
      setmessage("Registeration Successfull");
      console.log(res.data);
    } catch (error) {
      setmessage("Registeration Failed")
    }
    };
  
return (  
      <form onSubmit={handleSubmit}>
      
        <input name="name"
        placeholder="name"
       onChange={handleChange}
       value={form.name}
       /><br/><br></br>
       <input name="phone"
        placeholder="Phone"
       onChange={handleChange}
       value={form.phone}
       /><br/><br></br>
       <input name="email"
        placeholder="Email"
       onChange={handleChange}
       value={form.email}
       /><br/><br></br>
       <input type="submit" value="Submit" />
      </form>
    
    )}

export default Form;