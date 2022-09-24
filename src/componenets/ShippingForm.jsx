import React,{useState} from 'react'

function ShippingForm(props) {
 const[title,setTitle]=useState("");
 const [colour,setColour]=useState("");
 const [weight,setWeight]=useState("");
 const [add,setAdd]=useState("");
 const handleSubmit=(e)=>{
  e.preventDefault();
 const data={
  title:title,
  colour:colour,
  weight:weight,
  add:add
 }
 props.addToListCallback(data)
 }

  return (
    <div className='ship'>
      <h1>ShippingForm</h1>
   <form onSubmit={handleSubmit}>
    
    <input type="text" value={title} placeholder='enter the box name' 
    onChange={(e) =>setTitle(e.target.value)}></input>
    <label >color</label>
    <input type="color" value={colour} onChange={(e)=>setColour(e.target.value)}></input>

    <input type="number" value={weight} placeholder='weight of box' 
    onChange={(e) =>setWeight(e.target.value)} />
    <input type="text" valuse={add} placeholder='address'
     onChange={(e) =>setAdd(e.target.value)} />
    <button className='b'>submit</button>

    </form>
    </div> )
}

export default ShippingForm