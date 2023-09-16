import {createContext, useState, useEffect} from 'react'
//import jwt_decode from "jwt-decode";
//import { useNavigate } from 'react-router-dom';

 

const SupContext = createContext()


export default SupContext


export const SupProvider = ({children})=>{
    let[loading,setLoading]=useState(true)
    let[topRated,setToprated]=useState(null)
    let[genreList, setGenre]=useState(null)


    let get_genre = async ()=>{
        let response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDdhN2U2ZDU0NWRhNGNjYTI0NTlkMTBlNGJkZDMxOCIsInN1YiI6IjY1MDA0MTBlZmZjOWRlMGVkZWQ0MjM0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1fA6aP2rO9-NFTwCqfOfybihk_uLRJBP-1y0Wzvihow'
              }
        })
        let data = await response.json()
        if(response.status === 200){
            setGenre(data) 
        }
    }

    let getRated = async ()=>{
        let response = await fetch("https://api.themoviedb.org/3/movie/top_rated/",{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDdhN2U2ZDU0NWRhNGNjYTI0NTlkMTBlNGJkZDMxOCIsInN1YiI6IjY1MDA0MTBlZmZjOWRlMGVkZWQ0MjM0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1fA6aP2rO9-NFTwCqfOfybihk_uLRJBP-1y0Wzvihow'
              }
        })
        let data = await response.json()
        if(response.status === 200){
            if(data){
                setToprated(data)
                setLoading(false)
                
            }

        }
    }


    useEffect(()=>{
        if(loading){
            getRated()
            get_genre()
            
        }
    })
    let contextData = {
        topRated:topRated,
        genreList:genreList
    }

    return(
        <SupContext.Provider value={contextData}>
            {loading? null: children}
        </SupContext.Provider>
    )

}