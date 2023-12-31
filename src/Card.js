import React from "react";

const Card = (props) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow'>
            <img alt="robots" src={"https://robohash.org/${props.username}?"}></img>
            <div>
                <h1>{props.name}</h1>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;