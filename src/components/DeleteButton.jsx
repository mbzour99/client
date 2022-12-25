import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deletePlayer = e => {
        var messa = window.confirm("You are sure Delete this player?");
        if (messa)
                { 
                    axios.delete('http://localhost:8000/api/delete/' + playerId)
                    .then(res=>{
                        successCallback();
                    })
                }           
       
       
         
    }
    
    return (
        <button onClick={deletePlayer}>
            Delete
        </button>
    )
}

