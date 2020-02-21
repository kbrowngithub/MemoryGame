import React from "react";
import "./style.css";

function ClickyCard(props) {
    return (
        <div className="card" selected={props.selected} onClick={() => props.selectCard(props.id)}>
            <div className="img-container">
                <img alt={props.image} src={props.image} />
                {/* <img alt="images/2C.png" src="./images/2C.png" /> */}
            </div>           
        </div>
    )
}

export default ClickyCard;