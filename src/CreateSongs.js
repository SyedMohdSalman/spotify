import {useState} from 'react';
import {useHistory} from 'react-router-dom'



const CreateSongs = () => {

    const [songName, setSongName] = useState("");
    const [bio, setBio] = useState("");
    const [artists, setArtists] = useState("");
    const [dateofrelease, setDateofrelease] = useState("");
    const [artwork, setArtwork] = useState("");
    const [rate, setRate] = useState("");

    let history = useHistory();

    const handelSubmit = (e)=>{
        e.preventDefault();

        let song = {songName,bio,artists,dateofrelease,artwork,rate};

        console.log(song);


        fetch("http://localhost:3001/songs" , {
            method:"POST",
            headers:{"Content-Type" : "application/json"} , 
            body: JSON.stringify(song),
        }).then(()=>{
            history.go(-2);
            history.push("/song1")
        })
    }

    return (
        <div className="add-songs">

    <form className="create-song" onSubmit={handelSubmit}>

    <label>Song Name : </label> <input type="text" value={songName} onChange={(e)=>{setSongName(e.target.value)}}/>


    <label>Bio : </label> <input type="text" value={bio} onChange={(e)=>{setBio(e.target.value)}} />

    <label>Artists : </label> <input type="text" value={artists} onChange={(e)=>{setArtists(e.target.value)}} />

    <label>Dateofrelease : </label> <input type="text" value={dateofrelease} onChange={(e)=>{setDateofrelease(e.target.value)}} />

    <label>Artwork : </label> <input type="text" value={artwork} onChange={(e)=>{setArtwork(e.target.value)}} />

    <label>Rate : </label> <textarea cols="50" rows="5" value={rate} onChange={(e)=>{setRate(e.target.value)}}></textarea>

    
    <input type="submit" />

    </form>
            
        </div>
    );
}
export default CreateSongs;