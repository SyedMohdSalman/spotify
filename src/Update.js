import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Update = () => {

    let {id} = useParams();
    let history = useHistory();

    let [stdName , setName] = useState("");
    let [gender , setGender] = useState("");

    let handelUpdate = (e)=>{

        e.preventDefault();

        let replacingStd = {stdName ,gender}

        fetch("http://localhost:4000/StudentDetails/"+ id , 
        {method:"PUT",
        headers:{"ACCEPT":"application/json","Content-Type":"application/json"},
        body:JSON.stringify(replacingStd)
        }
        )
        
        
    
    }

    return ( 
    <div>
        <form onSubmit={handelUpdate}>

                <label>Name : </label> <input type="text" value={stdName} onChange={(e)=>{setName(e.target.value)}} />


                <fieldset>
                    <legend align="center">Select your gender</legend>

                    <input type="radio" name="gender" value="Male" onClick={(e)=>{setGender(e.target.value)}} /> <label>Male</label>

                    <input type="radio" name="gender" value="Female" onClick={(e)=>{setGender(e.target.value)}}/> <label>Female</label>


                    <input type="radio" name="gender" value="Others" onClick={(e)=>{setGender(e.target.value)}}/> <label>Others</label>

                    <br />
                </fieldset>

                <input type="submit"  value="update"/>
                
        </form>

    </div> );
}
export default Update;