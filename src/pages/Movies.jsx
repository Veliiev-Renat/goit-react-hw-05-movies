import { useSearchParams,useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Movies(){
const [searchParams,setSearchParams]  =  useSearchParams()
const [search,setSearch] = useState('')
const [movies,setMovies]= useState(null)

const location = useLocation()

const submit =(e)=>{
    e.preventDefault()
    if(search!==''){
    setSearch(e.currentTarget.elements[0].value.trim())
    setSearchParams({ query: e.currentTarget.elements[0].value.trim()})  
    }
    e.currentTarget.reset();
}


useEffect(()=>{
    if(search!==''){
       fetch(`https://api.themoviedb.org/3/search/movie?api_key=f1334d29bcfab8e1b28860290726f3ad&language=en-US&page=1&include_adult=false&query=${search}`)
       .then(r=>r.json())
       .then(searchMovies=>{
        const {results} = searchMovies
        setMovies(results)})
    }

},[search])

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