import { Link } from "react-router-dom";
import styled from "styled-components";
const Image = styled.img`

`;

const SongsList = ({songs , title }) => {    

    return ( 
        <div>
            <h1>{title}</h1>
            { songs.map((song)=>(
            <div className="songs-list">
                <Link to={`/song${song.id}`}>
                    <h2>Song : {song.songName}</h2>
                    <div>
                        <h3>Bio : {song.bio}</h3>
                        <h3>Artists : {song.artists}</h3>
                    </div>
                    <h3>Date of release : {song.dateofrelease}</h3>
                    <h4>Artwork :</h4>
                    <Image src={song.img} />
                    <p>Rate : {song.rate}</p>
                </Link>
            </div>
        )) }
        </div>
    );
}

export default SongsList;