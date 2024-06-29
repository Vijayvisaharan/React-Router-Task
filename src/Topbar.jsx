import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
    return (
        <>
            <form class="container-justify-content-center ">
                <ul className="nav justify-content-center nav-tabs m-3">
                    <li className="nav-item  m-3">
                        <Link to={"/"} className="nav-link active" >ALL</Link>
                    </li>
                    <li className="nav-item  m-3">
                        <Link to={"/fsd"} className="nav-link">FULL STACK DEVELOPMENT</Link>
                    </li>
                    <li className="nav-item  m-3">
                        <Link to={"/datascience"} className="nav-link" >DATA SCIENCE</Link>
                    </li>
                    <li className="nav-item  m-3">
                        <Link to={"/cyber"} className="nav-link " >CYBER SECURITY</Link>
                    </li>
                    <li className="nav-item  m-3">
                        <Link to={"/career"} className="nav-link">CAREER</Link>
                    </li>
                </ul>
            </form>
        </>
    )
}

export default Topbar
