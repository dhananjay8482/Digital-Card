import React from "react";
import img from "../assets/profile-pic.jpg"

export default function Info(){
    return(
        <div className="card-Info">
            <img src={img} alt="" className="card-profile-img"  />
            <h1 className="card-title" >Dhananjay Sonar</h1>
            <p className="card-sub-title" >WEB Developer</p>
            <p className="card-email" >sondardjay24.official@gmail.com</p>
            <div className="row-btn" >
                <button className="info-btn-email">Email</button>
                <button className="info-btn-login" >LinkdIn</button>
            </div>
        </div>
    )
}