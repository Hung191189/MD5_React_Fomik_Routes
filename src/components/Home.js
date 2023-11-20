import Navbar from "./Navbar";
import {Link, Outlet} from "react-router-dom";

export default function Home(){
    return(
        <>
            <Navbar></Navbar>
            <Link to={"/list"}>ListStudent</Link> |
            <Link to={"/create"}>Create Student</Link> |
            <Link to={"/edit/:id"}></Link> |
            <hr/>
            <Outlet></Outlet>
        </>
    )
}