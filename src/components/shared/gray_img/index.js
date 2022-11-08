import { Fragment } from "react";

const GrayImg = (props) =>{
    return (
        <Fragment>
            <img className='planetImg' src={props.img_url}></img>
        </Fragment>
    )
}

export default GrayImg;