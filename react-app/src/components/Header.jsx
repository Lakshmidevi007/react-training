import { useNavigate } from "react-router-dom";

function Header(){
    const Navigate = useNavigate();
    return(
        <div className="head">
            <a onClick={()=>{Navigate("/")}}>Home</a>
            <a onClick={()=>{Navigate("/about")}}>Counter</a>
            {/* <a onClick={}>cars</a>
            <a href="#reviews">Reviews</a> */}
<input type="text" placeholder="search"></input>
<button>login</button>
        </div>
    )
}
export default Header;