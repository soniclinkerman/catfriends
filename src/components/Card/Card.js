import React, {Fragment} from "react";
import "./Card.css"

const Card = ({id,name,email}) => {
    return(
        <Fragment>
            <div className="tc grow br3 pa3 ma2 dib bw2 shadow-5">
                <img className="img-size" src={`https://robohash.org/${id}?set=set4`} alt="kitten"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Card