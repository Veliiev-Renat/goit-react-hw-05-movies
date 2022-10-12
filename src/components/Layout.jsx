import AppBar from "./AppBar"
import { Outlet } from "react-router-dom"
export default function Layout(){
    return(<div>
        <AppBar />
        <Outlet/>
    </div>)
}