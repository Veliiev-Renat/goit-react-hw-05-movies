import { useEffect,useState } from "react" 
import { Link } from "react-router-dom"

export default function Home(){
    const [movies,setMovies] = useState([])

    useEffect(()=>{
fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=f1334d29bcfab8e1b28860290726f3ad')
.then(r=>r.json())
.then(movie=>{
    const {results} = movie
    setMovies(results)
})  
    },[])

    return(<>
        <h2>Trending todey</h2>
    <ul>
        {movies.map(({original_title,id})=>(<li key={id}><Link to={`/movies/${id}`}>{original_title}</Link></li>))}
    </ul>
    </>)
}