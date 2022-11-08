import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";
import SatellitesFrom from "../../planet/form"
import { Link } from "react-router-dom";


const Planet = (props) =>{


        let title
    if (props.title_with_underline) {
        title = <h4><a href="#" >{props.name}</a></h4>
    } else {
        title = <h4>{props.name}</h4>
    }
        return (
            <div className="planetContainer">
                <Link className='planetContainerTitle' to={`/planet/${props.id}`}>{title}</Link>
                <DescriptionWithLink description={props.description} link={props.link} />
                <GrayImg img_url={props.img_url} />
            </div>
        )
    }

export default Planet;