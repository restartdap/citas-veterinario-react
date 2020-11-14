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
    const actualizarState = (e) => {
        console.log(e.taget.name);
        console.log(e.taget.value);

        actualizarCita({
            // Se tiene que agregar una copia del state, ya que se borra
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    // Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario envia el formulario
    const submitCita = (e) => {
        e.preventDefault();
        alert("Enviando...");

        // Validaciones

        // Asignar un ID

        // Crear la cita

        // Reiniciar el form
        
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form
                onSubmit = {submitCita}
            >
                <label>Mascota</label>
                <input 
                    type = "text"
                    name = "mascota"
                    className = "u-full-width"
                    placeholder = "Nombre de la mascota..."
                    onChange = { actualizarState }
                    value = {mascota}
                />
                <label>Dueño</label>
                <input 
                    type = "text"
                    name = "propietario"
                    className = "u-full-width"
                    placeholder = "Nombre del dueño de la mascota..."
                    onChange = { actualizarState }
                    value = {propietario}
                />
                <label>Fecha</label>
                <input 
                    type = "date"
                    name = "fecha"
                    className = "u-full-width"
                    onChange = { actualizarState }
                    value = {fecha}
                />
                <label>Hora</label>
                <input 
                    type = "time"
                    name = "hora"
                    className = "u-full-width"
                    onChange = { actualizarState }
                    value = {hora}
                />
                <label>Síntomas</label>
                <textarea
                    className = "u-full-width"
                    name = "sintomas"
                    placeholder = "Descripción de los sintomas..."
                    onChange = { actualizarState }
                    value = {sintomas}
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