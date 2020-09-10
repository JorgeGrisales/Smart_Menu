import React from 'react';
import '../style/Inicio.css';

export const Inicio = (props) => {
  const {titulo2,Descripcion3} = props

  return(
    <div className="Inicio">
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center ">
    <img className="Logo" src="https://acob.guru/e42/iconos/user.png" alt="Logo" />
      <h1 className="display-4">{titulo2}</h1>
      <p className="lead">
      {Descripcion3}
      </p>

    </div>
    
    <div>
    <form className= "text-center">
    <div>
      <row>
    <div>
        <group className="formGridName">
          <label className= "inputName" for= "inputName">Nombre </label>
          <input type="Name" placeholder="Name" />
        </group>
    </div>
    
    <div>
        <group classNmae="formGridPassword">
          <label className= "inputPassword" for= "inputPassword">Contraseña </label>
          <input type="password" placeholder="Password" />
        </group>
    </div>
      </row>
    </div>,
    
    <div>
      <button className= "btn btn-dark" type="submit">
        Iniciar Sesion
      </button>
    </div>
    
    </form>
    </div>
      </div>
      
    )
    };