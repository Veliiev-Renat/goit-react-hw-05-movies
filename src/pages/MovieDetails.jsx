import { useParams , Link,Outlet, useLocation} from "react-router-dom";
import { useEffect,useState,Suspense} from "react";
import { Details } from "../components/Details";


const MovieDetails = () => {
const [movie,setMovie]= useState(null)
const {movieId} = useParams()
const location = useLocation()
console.log()
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f1334d29bcfab8e1b28860290726f3ad&language=en-US`)
    .then(r=>r.json())
    .then(movie=>setMovie(movie))
  },[movieId])

    return (<>
    {movie && <Details props={movie} />}
    <section>
        <p>Additional information</p>
        <ul>
        <li><Link to={`/movies/${movieId}/cast`} state={{location:location.state.location}}>Cast</Link></li>
        <li><Link to={`/movies/${movieId}/reviews`} state={{location:location.state.location}}>Reviews</Link></li>
        </ul>
    </section>
    <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
    </Suspense>
    </>);
  };
  
  export default MovieDetails