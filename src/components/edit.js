import React from "react";
const edit =(props)=>{
   console.log(props)
    return (
        <div>
            edit {props.match.params.id}
        </div>
    )
}
export default edit;