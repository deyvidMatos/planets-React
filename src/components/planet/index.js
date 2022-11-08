import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/description_with_link";
import SatellitesFrom from "../planet/form"
import { Link, useParams } from "react-router-dom"

async function getPlanet(id) {
    let response = await fetch(`https://deyvidMatos.github.io/planets-React/api/${id}.json`);
    let data = await response.json();
    return data
}

const Planet = () => {
    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState({})
    let { id } = useParams()

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        })
    }, [])

    const addSatellites = (new_satellites) => {
        setSatellites([...satellites, new_satellites])
    }

    let title
    if (planet.title_with_underline) {
        title = <h4 className="title" ><a href="#" >{planet.name}</a></h4>
    } else {
        title = <h4 className="title" >{planet.name}</h4>
    }
    return (
        <div className="singlePlanetContainer">
            <div className="singlePlanet">
                <Link className='planetContainerTitle' to={'/planets-React'} >Lista de planetas</Link>
                {title}
                <div className="imgDescr">
                    <div className="singleDescr">
                        <DescriptionWithLink description={planet.description} link={planet.link} />
                    </div>
                    <div>
                        <GrayImg img_url={planet.img_url} />
                    </div>
                </div>
                <div className="satellitesFrom">
                    <h4>Satélites</h4>
                    <SatellitesFrom addSatellites={addSatellites} />
                    <ul>
                        {satellites.map((satellites, index) =>
                            <li key={index}>{satellites.name}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Planet;