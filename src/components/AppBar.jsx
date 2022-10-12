import { NavLink } from "react-router-dom"



const checkActive = ({isActive}) => {
    return isActive ? {color:'red'} : {color:'blue'}
}
export default function AppBar(){
    return(
    <header>
        <nav>
            <ul style={{display: 'flex', flexWrap: 'wrap',gap: '20px'}}>
            <NavLink style={checkActive} to='/home'>Home</NavLink>
            <NavLink style={checkActive} to='/movies'>Movies</NavLink>
            </ul>
        </nav>
    </header>)
}