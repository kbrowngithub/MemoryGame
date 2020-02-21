import React from "react";
import "./style.css";

function Title(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Memory Game</a>
                </li>
                <li className="">{props.status}</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    );
}

export default Title;