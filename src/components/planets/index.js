import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form"

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data
}



const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }


    return (
        <div className="planetsList">
            <div className="homeForm">
                <h1>Lista de planetas</h1>
                <Form addPlanet={addPlanet} />
            </div>
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index} />
            )}

        </div>
    )
}

export default Planets;