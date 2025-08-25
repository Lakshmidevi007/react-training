import React from "react";

function DemoFun(props){
    var Paymentstatus=props.Bill;
    if(Paymentstatus==="paid"){
        return(
            <button className="btn-green">Download Bill</button>
        );
        }    else{
return(
    <button className="btn-red">paynow</button>
)
             }   
                    
                }
            
        
function Condition(){
var dataset=[
        {name:"lakshmi",course:"MERN",fee:"paid"},
        {name:"abi",course:"MERN",fee:"unpaid"},
        {name:"praveen",course:"MERN",fee:"unpaid"},
         {name:"priya",course:"MERN",fee:"paid"},
    ];

return(
    <div className="table">
        <tr>
            <th>NAME</th>
            <th>Course</th>
            <th>FEE</th>
        </tr>
{
    dataset.map((e)=>{
        return(
            <tr>
                <td>{e.name}</td>
                <td>{e.course}</td>
                <td>
                    <DemoFun Bill={e.fee}/>
                </td>
            </tr>
        )
    })
}
    </div>
)
}
export default Condition;