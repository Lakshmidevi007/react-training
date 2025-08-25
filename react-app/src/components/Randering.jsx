import React, { useState }from "react";

function Rendering(){
var [isLogin,setIsLogin]=useState(true);
return(
    <div>
        {isLogin ? <LoginPage/> :<Signuppage/>}

<button onClick={()=> setIsLogin(! isLogin)}>
    Switch to {

        isLogin ? "Signup": "Login"}
    
</button>


    </div>
);
}


function LoginPage(){
    return(
        <div>
            <h2>Login Page</h2>
            <form>
                <input type="text" placeholder="username"/><br/>
                <input type="password" placeholder="password"/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


function Signuppage(){
    return(
        <div>
            <h2>Signup page</h2>
            <form>
                <input type="text" placeholder="Username"/><br/>
                <input type="email" placeholder="Email"/><br/>
<input type="password" placeholder="Password"/><br/>

            <button type="submit">Signup</button>    

            </form>
        </div>
    )
}

export default Rendering;