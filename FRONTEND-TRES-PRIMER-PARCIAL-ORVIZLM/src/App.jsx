import React, { useState } from 'react'
import '../src/App.css';
import { Form } from '../src/components/form';

function App() {
  const [informacion, setInformacion] = useState({});
  const [isMensajeDeError, setMensajeDeError] = useState(false);

  const onSubmit = (data) => {
    console.log("data", data)

    if (data.nombre.length > 2 
      && data.apellido.length > 2) {
        // Si cumple la validacion,
        // actualizo el estado y muestro la informacion.
        setInformacion(data)
    } else {
      setMensajeDeError(true)
    }
  };

  return (
    <div className="App">
      <p>Test desde Repaso app</p>
      <Form
        onSubmit={onSubmit}
        titulo="Formulario de Login"
      />
      {informacion && !isMensajeDeError &&
        <div>
          <span>Nombre: {informacion.nombre}</span>
          <br />
          <br />
          <span>Apellido: {informacion.apellido}</span>
        </div>
      }
      {isMensajeDeError && 
        <span>"Verifica tus datos, hubo un error!!!"</span>
      }
    </div>
  );
}

export default App;


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../src/App.css'


function App() {

  export default function App() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    const onSubmitForm = (e) => {
  
    e.preventDefault();
  
    alert(`Bienvenido: ${userName}`);
    };

    export default function App() {

      return (
        <div className="App">
          <h3>Iniciar Sesión</h3>
          {
          }
          <form onSubmit={onSubmitForm}>
          {
          }
          <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={onChangeUserName}
          />
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChangePassword}
          />
          {
          }
          <button type="submit">Enviar</button>
          </form>
        </div>
      );
    }
    
  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form>{    }</form>
    </div>
  );
}

}
*/