import React from "react";
import twitter from "../assets/icon-twitter.png";
import fb from "../assets/icon-fb.png";
import insta from "../assets/icon-insta.png";
import git from "../assets/icon-git.png";

export default function Footer(){
    return(
        <div className="card-footer" >
            <div>
                <a href="#"><img className="footer-img" src={twitter} alt=""/></a>
                <a href="#"><img className="footer-img" src={fb} alt="" /></a>
                <a href="#"> <img src={insta} alt="" className="footer-img" /></a>
                <a href="https://github.com/dhananjay8482"><img src={git} alt="" className="footer-img" /></a>
            </div>
        </div>
    )
}