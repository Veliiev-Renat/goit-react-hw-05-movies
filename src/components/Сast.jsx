import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Cast(){
    const [credits,setCredits] = useState([])
    const {movieId} = useParams()
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f1334d29bcfab8e1b28860290726f3ad&language=en-US`)
        .then(r=>r.json())
        .then(casts=>{
            const {cast} = casts
            setCredits(cast)})
      },[movieId])
    return(
        <ul>
        {credits.length>0 ? credits.map(({name,character,profile_path,id})=>(<li key={id}>
            <img src={profile_path?`https://image.tmdb.org/t/p/w500${profile_path}`:
            'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png'} alt={name} style={{width:'300px',height:'370px'}} ></img>
            <p>{name}</p>
            <p>{character}</p>
        </li>)) : <li>We don't have any сast for this movie</li>}
        </ul>
    )
}