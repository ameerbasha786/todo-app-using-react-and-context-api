import React from 'react';





const Model = (props) => {

    return (

        <div className="modelmaindiv">

            <div className="modeldiv">

                <ul>
                    <li >{props.numbers} {props.persons} {props.mybuttons.mydeletebutton} {props.mybuttons.myupdatebutton}</li>
                </ul>

            </div>

        </div>
    )
}
export default Model