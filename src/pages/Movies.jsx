import { useSearchParams,useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Movies(){
const [searchParams,setSearchParams]  =  useSearchParams()
// const [search,setSearch] = useState('')
const [movies,setMovies]= useState(null)
const location = useLocation()
const query = searchParams.get("query");
console.log(query)
const submit =(e)=>{
    e.preventDefault()
   const input = e.currentTarget.elements[0].value
    if(input.trim()!==''){
    // setSearch(input.trim())
    setSearchParams({ query : input.trim()})  
    }
    e.currentTarget.reset();
}


useEffect(()=>{
    if(query!==''){
       fetch(`https://api.themoviedb.org/3/search/movie?api_key=f1334d29bcfab8e1b28860290726f3ad&language=en-US&page=1&include_adult=false&query=${query}`)
       .then(r=>r.json())
       .then(searchMovies=>{
        const {results} = searchMovies
        setMovies(results)})
    }

},[query])

    return(
    <>
    <form onSubmit={submit}>
    <input/>
    <button type="submit">Search</button>
    </form>
    {movies&&<ul>
        {movies.map(({original_title,id})=>(<li key={id}><Link to={`/movies/${id}`} state={{ from: location }} >{original_title}</Link></li>))}</ul>}
    </>)
}