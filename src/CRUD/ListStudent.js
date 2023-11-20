import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";

export default function ListStudent(){
    const [list, setList] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/students").then(res=>{
            setList(res.data)
        })
    },[])
    return(
        <>
        <h1>list</h1>
            {list.map((item, key)=>{
                return(
                   <Link to={"/edit/" + item.id}> <h3 key={key}>{item.name}</h3></Link>
                )})
            }
        </>
    )
}