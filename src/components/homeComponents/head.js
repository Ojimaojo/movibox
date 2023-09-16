import LoginIcon from "./loginicon";
import Logo from "./logo";
import Search from "./search";
import {createContext, useState, useEffect, useContext} from 'react'
import imdb from "./img/imdb.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SupContext from "../../context/SupContext";
import { Link } from "react-router-dom";
import { faCog } from '@fortawesome/free-solid-svg-icons'


function Head() {
   
 let {topRated} = useContext(SupContext)

    const play = <FontAwesomeIcon icon={faPlayCircle} />
    const cog = <FontAwesomeIcon icon={faCog} size="6x" />
    
    
    if(topRated){
        let imgbg = topRated.results[0].backdrop_path
        var durl = 'https://image.tmdb.org/t/p/w500'+imgbg
        var desc = topRated.results[0].overview
        var title = topRated.results[0].title
    }

    if(topRated){
        return (
            <div className='header'  style={{backgroundImage:"url("+ durl +")"}} > 
            <div className="d-flex justify-content-between container pt-3">
                <Logo />
                <Search />
                <LoginIcon />
            </div>
            <div className="feautured d-flex justify-content-betwween container pt-3">
            <div className="feauturedDetails">
                <h3>{title}</h3>
                <div className="pt-2 pb-2 mt-2 mb-2">
                    <img src={imdb} alt="imdb" /><span className="p-2">{topRated?.results[0].vote_average}/10</span>
                </div>
                <p>{desc}</p>
                <Link className="btn btnColor" to={'/movie/'+topRated?.results[0].id}><span className="p-1 mr-1 ml-1">{play}</span>WATCH TRAILER</Link>
            </div>
            <div className="blank">
    
            </div>
            </div>
        </div>
         );
    }else{
        return(
            <div style={{backgroundColor:'grey'}}>
                <span className="spinner">{cog}</span>
            </div>
        )
    }


}

export default Head;
