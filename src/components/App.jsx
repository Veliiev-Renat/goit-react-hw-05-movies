import { Route,Routes,useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import  MovieDetails  from "../pages/MovieDetails";
import { useEffect } from "react"; 
import Movies from "../pages/Movies";
// import Cast from "./Сast";
// import { Reviews } from "./Reviews";
import { lazy } from "react";

const Reviews = lazy(() => import("./Reviews"));
const Cast = lazy(() => import("./Сast"));

export const App = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/home')
  },[])
  return (
    <>
    <Routes>
      <Route path='/'element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path='movies' element={<Movies />}/>
          <Route path='/movies/:movieId' element={<MovieDetails />}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
          </Route>
      </Route>
    </Routes>
    </>
  );
};
