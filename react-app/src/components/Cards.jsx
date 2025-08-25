 
function Cards(props){
    return(
        <div >
            <div className="card" >
              <img src={Reactlog} alt="" />
  <div class="card-body">
    <h5 class="card-title">Id Card</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Employee ID</h6>
    <p>Name:{props.name}</p>
    <p>DOB:{props.dob}</p>
    <p>Email:{props.email}</p>
    <p>Roll:{props.roll}</p>
  </div>
</div>
        </div>
    )
}
export default Cards;