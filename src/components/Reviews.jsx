import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
 const Reviews = () => {
    const [reviews,setReviews]= useState([])
      const {movieId} = useParams()
      useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f1334d29bcfab8e1b28860290726f3ad&language=en-US&page=1`)
        .then(r=>r.json())
        .then(review=>{
            const {results}  = review
            setReviews(results)})
      },[movieId])
        return (<ul>
        {reviews.length>0 ? reviews.map(({id,author,content})=>(<li key={id}>
            <p>Autor : {author}</p>
            <p>{content}</p>
        </li>)) : <li>We don't have any reviews for this movie</li>}
        </ul>);
      };

      export default Reviews