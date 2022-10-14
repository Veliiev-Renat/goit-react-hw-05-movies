import { useSearchParams,useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function Movies(){
const [searchParams,setSearchParams]  =  useSearchParams()
// const [search,setSearch] = useState('')
const [movies,setMovies]= useState(null)
const location = useLocation()

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
    const search = searchParams.get('query')
    if(search!==null){
       fetch(`https://api.themoviedb.org/3/search/movie?api_key=f1334d29bcfab8e1b28860290726f3ad&language=en-US&page=1&include_adult=false&query=${search}`)
       .then(r=>r.json())
       .then(searchMovies=>{
        const {results,total_results} = searchMovies
        if(total_results===0){
            alert("We don't have any movie with this title")
        }
        setMovies(results)})
        
    }

},[searchParams])

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