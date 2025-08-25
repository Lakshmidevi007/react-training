function Mapping(){
    var dataset =[
        {name:"lakshmi", email:"lakshmi@gmail.com",password:"lakshmi@123" },
        {name:"abi", email:"abi@gmail.com",password:"abi@123" },
    ]
    return(
        <div className="state">
            
            <h1>Mapping</h1>
            {dataset.map((props)=>{

            
            return(
                <div className="template">
                    <p>name:{props.name}
                        <p>Email:{props.email}</p>
                        <p>password:{props.password}</p>
                    </p>
                </div>

            
            
            )
})}
</div>
    )
}
export default Mapping;