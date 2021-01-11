import React, { Fragment, useState, useEffect } from 'react'
import Cita from './components/Cita';
import Formulario from './components/Formulario'

function App() {

  // Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  // Arreglo de Citas
  const [citas, guardarCitas] = useState(citasIniciales);

  // Use Effect para realizar operaciones cuando el state cambia
  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = cita => { 
    guardarCitas([...citas, cita]);
  }

  // Función que elimina una cita por su id
  const eliminarCita = id => {
    console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
