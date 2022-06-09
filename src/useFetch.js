import { useState , useEffect } from 'react';
const useFetch = (req) => {

    let [data , setData] =  useState(null);
    let [pending , setPending] = useState(true);
    let [error ,seterror] = useState(null); 


    useEffect(()=>{
        setTimeout(()=>{fetch(req)
        .then((response)=>{
            if(response.ok===false)
            {
                throw Error("Data is not found , please search for songs insted")
            }
            return response.json();
        })
        .then((songs)=>{
            setData(songs);
            setPending(false)
        })
        .catch((error)=>{
            seterror(error.message);
            setPending(false);
        })
    } , 1000)
    } , [])


    return {data , pending , error}


}

export default useFetch;