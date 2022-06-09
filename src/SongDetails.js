import { useHistory, useParams , Link } from "react-router-dom";
import { useState } from "react";

const SongDetails = () => {

    let {id} = useParams();

    let history = useHistory();

    let [studentData , setStudentData] = useState(null);

    fetch("http://localhost:3001/StudentDetails/" + id)
    .then((response)=>{
        return response.json();
    })
    .then((fetchedData)=>{
        setStudentData(fetchedData);
    })

    const handelDelete= (deleteId)=>{
        fetch(`http://localhost:3001/StudentDetails/${deleteId}` , {method:"DELETE"})
        .then(()=>{
            history.push("/sheets")
        })
    }

    return ( 
    <div>

        {
            studentData && 
            <div>
                <h1>{studentData.stdName}</h1>

                <h1>{studentData.gender}</h1>

                <button onClick={()=>{handelDelete(studentData.id)}}>Delete</button> 

                <br/><br/>

        <button><Link to={`/update${studentData.id}`}> Edit </Link></button>

                
            </div>
        }
        

    </div> );
}
export default SongDetails;