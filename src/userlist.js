import React from "react";

import { Consumer } from './mycontext';

import Model from './model';

const mybtn1={

    borderRadius:"7px",
    color:"white",
    backgroundColor:"red"

}

const mybtn2={

    borderRadius:"7px",
    color:"white",
    backgroundColor:"#3434eb"

}

const Userlist = (props) => {

    console.log(props.myuser)

    return (

        <div>
        
            {props.myuser.map((val, index) => (

                <Consumer key={index}>
                
                    {
                        
                        (myFun) => (
                            
                            <Model persons={val} numbers={index} mybuttons={{mydeletebutton:<button style={mybtn1}  onClick={() => myFun.removedata(index)}>delete</button>, myupdatebutton:<button style={mybtn2} onClick={() => myFun.changedata(index, val)}>update</button>}}/>
                           
                        )
                    }

                </Consumer>

            ))}

        </div>
    )
}

export default Userlist