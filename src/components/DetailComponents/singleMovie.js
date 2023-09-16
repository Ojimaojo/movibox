import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import logo from '../homeComponents/img/tv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { faTelevision } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function SingleMovie() {
    let[movie, setMovie]=useState(null)
    let[loading,setLoading]=useState(true)

    let movie_id = useParams() 
    let new_id = movie_id.id
    let url = "https://api.themoviedb.org/3/movie/"+new_id

    const houseIcon = <FontAwesomeIcon icon={faHouse} />
    const videoIcon = <FontAwesomeIcon icon={faVideoCamera} />
    const tvIcon = <FontAwesomeIcon icon={faTelevision} />
    const calIcon = <FontAwesomeIcon icon={faCalendar} />
    const starIcon = <FontAwesomeIcon icon={faStar} />
    const play = <FontAwesomeIcon icon={faPlayCircle} size="6x" />


    let getMovie = async ()=>{
        let response = await fetch(url,{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDdhN2U2ZDU0NWRhNGNjYTI0NTlkMTBlNGJkZDMxOCIsInN1YiI6IjY1MDA0MTBlZmZjOWRlMGVkZWQ0MjM0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1fA6aP2rO9-NFTwCqfOfybihk_uLRJBP-1y0Wzvihow'
              }
        })
        let data = await response.json()
        if(response.status === 200){
                setMovie(data)
                setLoading(false)
        }
    }


    useEffect(()=>{
        if(loading){
            getMovie()
        }
    })

    let prodDate = (date)=>{
        let prodDate = new Date(date)
        let theage = Date.UTC(prodDate.getUTCFullYear(), prodDate.getUTCMonth(), prodDate.getUTCDate())
        return theage
    }
    
    if(movie){
       // let imgbg = topRated.results[0].backdrop_path
        var durl = 'https://image.tmdb.org/t/p/w500'+movie.backdrop_path
        //var desc = topRated.results[0].overview
       // var title = topRated.results[0].title
    }
    let getImg = (linka)=>{
        let link = 'https://image.tmdb.org/t/p/w200'+linka
        return link
    }
    console.log(movie)
    return ( 
        <div className="d-flex">
            <div className="sidebar">
                <div className="detailLogo sidespace text-center">
                    <img src={logo} />
                    <span className="movieBox">Moviebox</span>
                </div>
                <div className="homeBtn sidespace text-center">
                    <Link to={'/'}><span>{houseIcon}</span><p>Home</p></Link>
                </div>
                <div className="homeBtn moviesid sidespace text-center">
                    <Link to={'/'}><span>{videoIcon}</span><p>Movies</p></Link>
                </div>
                <div className="homeBtn sidespace text-center">
                    <Link to={'/'}><span>{tvIcon}</span><p>TV Series</p></Link>
                </div>
                <div className="homeBtn sidespace text-center">
                    <Link to={'/'}><span>{calIcon}</span><p>Upcoming</p></Link>
                </div>
            </div>
            <div className="mainSection">
                <div className="Hero" style={{backgroundImage:"url("+ durl +")"}} >
                    <Link className="largePlay" to={movie?.homepage}><span>{play}</span></Link>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="m-4 p-2">
                    <div className="d-flex"><h5><span data-testid="movie-title">{movie?.title}</span> | <span data-testid="movie-release-date">{prodDate(movie?.release_date)}</span> | <span data-testid="movie-runtime">{movie?.runtime}Min.</span></h5> <span className="genreCont">{movie?.genres.map((genre,index)=>(<span className="gen2" key={index}>{genre.name}</span>))}</span></div>
                    </div>
                    <div className="m-4 p-2"><span style={{color:'yellow',fontWeight:500}}>{starIcon}</span> <span><b>{movie?.vote_average}</b></span> | <span>{movie?.vote_count}</span></div>
                </div>
                <div className="detailBody row">
                    <div className="col">
                        <p className="ml-5 mr-5 p-2" data-testid="movie-overview">{movie?.overview}</p>
                        <h6 style={{color:'#be123c'}}><b>Companies</b></h6>
                        <p><span className="">{movie?.production_companies.map((company,index)=>(<span className="" key={index}><img alt="logo" style={{width:'100px',margin:'4px'}} src={getImg(company.logo_path)} /></span>))}</span></p>
                        <div className="tabcont"><span className="tab">Popularity</span><span>{movie?.popularity}%</span></div>
                    </div>
                    <div className="col-md-2">
                        <div><Link className="btn showtime">See Showtimes</Link></div>
                        <div><Link className="btn watchopt">More Watch Options</Link></div>   
                    </div>
                </div>
            </div>
        </div>
     );
}

export default SingleMovie;