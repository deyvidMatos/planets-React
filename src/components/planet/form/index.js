import React, { Fragment, useState, useEffect } from "react";

const initialState = {
    name: ''
}

const SatellitesFrom = (props) => {

    const [fields,setFields] = useState(initialState)

    const handleFieldsChange = (ev) => setFields({
        ...fields,
        [ev.currentTarget.name]: ev.currentTarget.value
    })
    
    const handleSubmit = (ev) => {
        props.addSatellites(fields)
        ev.preventDefault()
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='formDiv satellitesBtn'>
                <div>
                    <label htmlFor="name" >Satellites: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} ></input>
                </div>
                <input type="submit" className="btn"></input>
            </form>
        </Fragment>
    )
}

export default SatellitesFrom;