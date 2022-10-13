import { Route,Routes,Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "pages/Home";
import  MovieDetails  from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import { lazy } from "react";


const Reviews = lazy(() => import("./Reviews"));
const Cast = lazy(() => import("./Сast"));

export const App = () => {

  return (
    <>
    <Routes>
      <Route path='/'element={<Layout />}>
        <Route  index element={<Home />} />
        <Route path='movies' element={<Movies />}/>
          <Route path='/movies/:movieId' element={<MovieDetails />}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews/>}/>
          </Route>
      </Route>
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
    </>
  );
};
