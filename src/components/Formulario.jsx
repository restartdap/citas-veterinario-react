import React, { Fragment, useState } from 'react';

const Formulario = () => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    });

    // Cada vez que el usuario escribe en un input
    const actualizarState = () => {
        console.log("escribiendo...");
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Mascota</label>
                <input 
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre de la mascota..."
                    onChange = { actualizarState }
                />
                <label>Dueño</label>
                <input 
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre del dueño de la mascota..."
                    onChange = { actualizarState }
                />
                <label>Fecha</label>
                <input 
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                    onChange = { actualizarState }
                />
                <label>Hora</label>
                <input 
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                    onChange = { actualizarState }
                />
                <label>Síntomas</label>
                <textarea
                    className = "u-full-width"
                    name = "sintomas"
                    placeholder = "Descripción de los sintomas..."
                    onChange = { actualizarState }
                ></textarea>
                <button
                    type = "submit"
                    className = "u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
};

export default Formulario;