import React from "react";
function  Navbar(props){
    return(
        <>
<nav>
    <div className="logo">Logo Hear</div>
    <div className="main-nav">
        <ul>
            <li><a href="">{props.title}</a></li>
            <li><a href="">about</a></li>
            <li><a href="">services</a></li>
            <li><a href="">contect</a></li>
        </ul>
    </div>
    <div className="btn"><button>submit</button></div>
</nav>
</>
    )
}
export default Navbar;