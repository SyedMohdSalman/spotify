import SongsList from './SongsList';
import useFetch from './useFetch';

const Home = () => {

    let {data : songs , pending , error} = useFetch("http://localhost:3001/songs");

    



    return ( 
    <div className='home-content'>
        
    {error && <h1>{error}</h1>}

    {pending && <h1>Loading ..........</h1>}

    {songs && <SongsList songs={songs} title="All songs" />}

    </div>
    );
}

export default Home;