import React, { useState } from 'react'
import '../index.css'
import { db } from '../firebase-config';

const Driverform = () => {
  const [driverdetails,setdriverdetails]=useState({
    id:"",
    name:"",
    phoneNumber:"",
    drivername:"",
    drivernumber:"",
    location:"",
    vehicle_type:[],
    vehicleNumber:""
})
const[vehicletype,setvehicletype]=useState([])
const checkbox=(e)=>{
  if (e.target.checked) {
    setvehicletype([
      ...vehicletype,
      {
        
        value:e.target.value
      },
    ]);
  } 
  
}
  //Submit Event 
  const handleSubmit=(e)=>{
    e.preventDefault();
  //generate random id
    const id = Math.floor(10000 + Math.random() * 90000)
    setdriverdetails({id:id.toString(),...driverdetails,vehicle_type:vehicletype})
    console.log(driverdetails)
  db.collection('drivers').doc(id.toString()).set(
  driverdetails
  ).then(alert('successfully submited form'))
  
  // alert('successfully submited form')
 
  
  }
  return (
    <div className="container">
      <h1>Driver Registration</h1>
    <form onSubmit={handleSubmit}  className="ml-4 pt-4">
        <label className="form-label ">गाडी धनीको नाम (Owner's Name):</label><br/>
      <input 
        onChange={e => setdriverdetails({
          ...driverdetails,name: e.target.value 
        })}
        className="form-control"
        type="text"
        
        required
      /><br/>
      <label className="form-label ">गाडी धनीको फोन नंबर (Owner's Number):</label><br/>
      <input
        type="number"
        onChange={e => setdriverdetails({
          ...driverdetails,phoneNumber: e.target.value 
        })
      }
          
        
        className="form-control"
        
        
        required
      /><br/>
      <label className="form-label ">गाडी चालकको नाम (Driver's Name):</label><br/>
      <input
        
        onChange={e => setdriverdetails({
          ...driverdetails,drivername: e.target.value 
        })}
        className="form-control"
        type="text"
        
        required
      /><br/>
      <label className="form-label ">गाडी चालकको फोन नंब (Driver's Number):</label><br/>
      <input
        onChange={e => setdriverdetails({
          ...driverdetails,drivernumber: e.target.value 
        })}
        className="form-control"
        type="number"
        
        required
      /><br/>
       <label className="form-label ">गाडीको ठाउँ / स्थान (Location / Address):</label><br/>
      <input
        onChange={e => setdriverdetails({
          ...driverdetails,location: e.target.value 
        })}
        className="form-control"
        type="text"
        
        required
      /><br/>
      {/* vehicle  */}
      <label>भाडामा दिने गाडीको मोडल (Vehicle Model)</label><br/>
       <input type="checkbox" value="Scorpio" className="ml-4" onChange={checkbox} /><label>Scorpio</label><br/>
       <input type="checkbox" value="Landcruiser" className="ml-4" onChange={checkbox} /><label>Landcruiser</label><br/>
       <input type="checkbox" value="Toyota Haice" className="ml-4" onChange={checkbox} /><label>Toyota Haice</label><br/>
       <input type="checkbox" value="Car(Sedan)"className="ml-4"  onChange={checkbox} /><label>Car(Sedan)</label><br/>
       <input type="checkbox" value="Car(SUV)" className="ml-4" onChange={checkbox} /><label>Car(SUV)</label><br/>
       <input type="checkbox" value=" TATA Winger" className="ml-4" onChange={checkbox} /><label>TATA Winger</label><br/>
       <input type="checkbox" value=" TATA Sumo(A/c)" className="ml-4" onChange={checkbox} /><label>TATA Sumo(A/c)</label><br/>
       <input type="checkbox" value="TATA SUMO- NON(A/c)" className="ml-4" onChange={checkbox} /><label>TATA SUMO- NON(A/c)</label><br/>
       <input type="checkbox" value="Magic Van" className="ml-4"  onChange={checkbox} /><label>Magic Van</label><br/>
       <input type="checkbox" value="Delivery Van (Bolero)" className="ml-4"  onChange={checkbox} /><label>Delivery Van (Bolero)</label><br/>
       <input type="checkbox" value="TATA Ace(Cargo/ Carrier Van)"className="ml-4"  onChange={checkbox} /><label>TATA Ace(Cargo/ Carrier Van)</label><br/>
       <input type="checkbox" value="Bus(Tourist)"className="ml-4"  onChange={checkbox} /><label>Bus(Tourist)</label><br/>
       <input type="checkbox" value="Bus(Normal)" className="ml-4" onChange={checkbox} /><label>Bus(Normal)</label><br/>
       
       <label className="form-label">भाडामा दिने गाडीको नंबर (Eg. BA 1 Kha 1234):</label><br/>
       <input
        onChange={e => setdriverdetails({
          ...driverdetails,vehicleNumber: e.target.value 
})}
        className="form-control"
        type="text"
        required
      /><br/>
      <button type="submit" className="btn-success btn">Submit</button><br/>

    </form>
    </div>
    )
}

export default Driverform