import FeatureNav from "./featurenav";
import SupContext from "../../context/SupContext";
import { useContext } from "react";
import imbd2 from "../homeComponents/img/imdb.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

function Detail() {
    let {topRated} = useContext(SupContext)
    let {genreList} = useContext(SupContext)

    const heart = <FontAwesomeIcon icon={faHeart} />
    const cog = <FontAwesomeIcon icon={faCog} spin size="6x" />

    let handleClick = (Event) =>{
        Event.currentTarget.classList.toggle('liked')
    }

    if(topRated){
        let imgbg = topRated.results[0].poster_path
        var durl = 'https://image.tmdb.org/t/p/w200'+imgbg
        var desc = topRated.results[0].overview
        var title = topRated.results[0].title
        //console.log(topRated.results[0])
    }

    let get_url = (link)=>{
        let durl = 'https://image.tmdb.org/t/p/w200'+link
        return durl
    }
    
let get_genre = (id)=>{
    let real = genreList.genres
    
   if(real){
    for(let  i=0; i<real.length;i++){
        if(real[i].id == id){
            return real[i].name
        }
    }
   }

}

let get_date = (date)=>{
    let prodDate = new Date(date)
    let theage = Date.UTC(prodDate.getUTCFullYear(), prodDate.getUTCMonth(), prodDate.getUTCDate())
    return theage
}
 if(topRated){
    return ( 
        <div>
            <FeatureNav />
            <div className="container">
            {topRated?<div className="container d-flex justify-content-between row">
            {topRated?.results.slice(0,10).map((topRated,index)=>(
            <div className="col-sm-2 card mycard" key={index} data-testid='movie-card'>
                <img data-testid="movie-poster" class="card-img-top pt-2" src={get_url(topRated.poster_path)} alt="Card image cap"></img>
                <span className="heart"  onClick={handleClick}>{heart}</span>
                <div className="date pl-2 pr-2 d-flex justify-content-between" style={{textTransform:'uppercase'}}><span><b data-testid="movie-release-date">{get_date(topRated.release_date)}</b> </span> <span><b>{topRated.original_language}</b></span></div>
                <Link to={'/movie/'+topRated.id} className="card-body">
                    <h6 className="card-title" data-testid="movie-title">{topRated.title}</h6>
                    
                    <div>
                        <img src={imbd2} /> {topRated.vote_average}/10
                    </div>
                    <p className="card-text genre"> {get_genre(topRated.genre_ids[0])}, {get_genre(topRated.genre_ids[1])}</p>
                </Link>
            </div>
            ))}
            </div>:
            <div>
                <p>Loading...</p>
                
            </div>}
            </div>
        </div> 
        );
 }else{
    return(
        <div><span className="spinner">{cog}</span></div>
    )
 }


}

export default Detail;