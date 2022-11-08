import React, { Fragment, useState, useEffect } from "react";

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: '',
}

const Form = (props) => {

    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = (ev) => setFields({
        ...fields,
        [ev.currentTarget.name]: ev.currentTarget.value
    })

    const handleSubmit = (ev) => {
        props.addPlanet(fields)
        ev.preventDefault()
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h3>Adicione mais Planetas:</h3>
                <div className="formDiv" >
                    <div>
                        <label htmlFor="name" >Nome: </label>
                        <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} placeholder='Ex: Netuno' />
                    </div>
                    <div>
                        <label htmlFor="description" >Descrição: </label>
                        <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange} placeholder='Ex: Netuno e situado...' />
                    </div>
                    <div>
                        <label htmlFor="link" >link: </label>
                        <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange} placeholder='Ex: https//link_' />
                    </div>
                    <div>
                        <label htmlFor="img_url" >imagem: </label>
                        <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFieldsChange} placeholder='Ex: https//Url_' />
                    </div>
                </div>

                <input type="submit" className="btn"></input>
            </form>
        </Fragment>
    )
}

export default Form