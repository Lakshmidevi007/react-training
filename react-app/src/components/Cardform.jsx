import React, { useState } from 'react'

const Cardform=()=>{
  const [formData,setFormData]=useState({
    username:"",
    email:"",
    password:""
    
  });


  const handleChange=(e) =>{
    const {name,value}=e.target;

    setFormData((prev) =>({
...prev,
[name]:value,
    }));
      
    };

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("Form Data:",formData)
    };

return (
    
      < form className="container"
      onSubmit={handleSubmit}
        >
        <input name="username"
        placeholder="Username"
       onChange={handleChange}
       value={formData.username}
       /><br/>
       <input name="email"
        placeholder="Email"
       onChange={handleChange}
       value={formData.email}
       /><br/>
       <input name="password"
        placeholder="Password"
       onChange={handleChange}
       value={formData.password}
       /><br/>
       <button  type='Submit'>Submit</button>
      </form>
    
  )
}

export default Cardform;
