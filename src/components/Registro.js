import React from 'react';
import '../style/Registro.css';

export const Registro = (props) => {
  const {titulo,Descripcion,Descripcion2} = props


  return(
<div className="Registro">
<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center ">
<img className="Logo" src="https://www.tumarcafacil.com/wp-content/uploads/2017/06/RegistroDeMarca-01-1.png" alt="Logo" />
 <h1 className="display-4">{titulo}</h1>
  <p className="lead">
  {Descripcion}
  </p>
<p className="lead">
{Descripcion2}
</p>
</div>

<div>
<form className= "text-center">
<div>
  <row>
<div>
    <group className="formGridName">
      <label for= "inputName">Nombre </label>
      <input type="Name" placeholder="Name" />
    </group>
</div>

<div>
    <group classNmae="formGridPassword">
      <label for= "inputPassword">Contraseña </label>
      <input type="password" placeholder="Password" />
    </group>
</div>

<div>
    <group classNmae="formGridPassword1">
      <label for= "inputPassword1">Confirma tu contraseña </label>
      <input type="password1" placeholder="Confirm Password" />
    </group>
</div>
  </row>
</div>
<div>
  <group className="formGridAddress1">
    <label for= "inputAddress1">Direccion</label>
    <input className= "Address1" type= "Address1" placeholder="Example: Cll 94 A # 53 - 22" />
  </group>
</div>

<div>
  <group className="formGridAddress2">
    <label for= "inputAddress2">Mas datos de direccion</label>
    <input className= "Address2" type= "Address2" placeholder="Example: Apartment (301), studio (6), or internal floor (3 - 304)" />
  </group>
</div>

<div>
  <row>

    <div>
    <group className="formGridCity">
      <label for= "inputCity">Ciudad</label>
      <input />
    </group>
</div>

  </row>
</div>

<div>
  <button className= "btn btn-dark" type="submit">
    Registrar
  </button>
</div>

</form>
</div>
  </div>
  
)
};