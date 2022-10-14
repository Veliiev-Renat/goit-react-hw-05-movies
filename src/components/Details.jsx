import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
export function Details({props}){

    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/home";
    return(<main>
        <section>
        <Link to={backLinkHref}>Go back</Link>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt={props.title}></img>
            <div>
                <h2>{props.title}<span>({props.release_date.slice(0,4)})</span></h2>
                <p>User Score : {(props.vote_average * 100 / 10).toFixed(2)}%</p>
                <h3>Overview</h3>
                <p>{props.overview}</p>
                <h3>Genres</h3>
                {props.genres.map(({name})=>(<span key={name}>{name} </span>))}
            </div>
            </div>
        </section>
        </main>
);
      };

Details.propTypes={
    props:PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
        vote_average:PropTypes.number,
        release_date:PropTypes.string,
        overview:PropTypes.string,
        genres:PropTypes.arrayOf(PropTypes.shape({
            name:PropTypes.string
        }))
      }),
}