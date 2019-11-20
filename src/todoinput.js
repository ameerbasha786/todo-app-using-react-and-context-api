import React from 'react';
import Userlist from "./userlist";
 

const Todoinput=(props)=>{
console.log(props.names)

    return(

        <div className="inputdiv">

        <div style={{backgroundColor:"#3434eb"}}>

        <label><b>Username:</b></label>

        <input type="text"  value={props.name} placeholder="addusers" className="inputtext" onChange={props.inputhandels}  required/>

        <button onClick={props.savesdata} className="mybtn">save</button>

        <button onClick={props.editing} className="mybtn">edit</button>

        </div>
        
        {props.myloader?<h3 style={{color:"red"}}>addusers</h3>:<Userlist myuser={props.names} editor={props.editing}/>}

        </div>

    )
}  

export default Todoinput