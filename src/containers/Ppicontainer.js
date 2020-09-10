import React from 'react';
import '../styles.css';

import { Header } from '../components/Header';
import { Description} from '../components/Description';
import {Detail} from '../components/Detail';
import { Footer } from '../components/Footer';
import { Registro } from '../components/Registro';
import { Inicio } from '../components/Inicio';

export default function Ppicontainer(){
  return(
    <div className="Ppicontainer">
   <Header

companyName="Ahorra tiempo, ahorra dinero"
navBar={[

{
  name:"Registro en Smart Menú",
  url: "https://codesandbox.io/s/smart-menu-react-x5ccd?file=/src/components/Registro.js"
},
{
  name: "Inicio de Sesión",
  url:""
},
{
  name: "Smart Delivery",
  url:""
},
{
  name: "Buzón",
  url:""
}

]}
buttonText="Buscar restaurante"
   />
   <Description 
   tittle= "¿Buscas un restaurante?"
   Descripcion= "Aquí encontraras todo tipo de establecimiento de comida; junto con sus categorias, platillos, promociones, festejos y gangas."/>


<Detail

            primera= "McDonalds"
            segunda= "Burger King"
            tercera= "Subway"
            precio1= "$15.000"
            precio2= "$38.900"
            precio3= "$45.000"
            fundado1= "Est - 1955"
            fundado2= "Est - 1954"
            fundado3= "Est - 1965"
            
            tarjetas={[
            {
              p1: "McBurger",
              p2: "Cajita Feliz",
              p3: "Nuggets",
              p4: "¡Promociones!"
            },
            {
              s1: "Mega Burger",
              s2: "Combo Kindom",
              s3: "King Of the rain burger",
              s4: "¡Promoción!"
            },
            {
              t1: "Sanwich 30cm",
              t2: "Combo Subway",
              t3: "Mega Subway 65cm",
              t4: "¡2x1 HOY!"
            },
          ]}  
          buttonT="COMPRAR"
          />
          <Footer/>,
          <Registro
          titulo= "Registro de Usuario en Smart Menu"
          Descripcion= "¿Por que Registrarme?"
          Descripcion2= "Si te registras tendras una atencion mas efectiva, rapida y segura al igual que te identificaremos en nuestra plataforma"
          />
<Inicio
titulo2="Inicio de Sesion de usuario en Smart Menu"
Descripcion3="Accede a tu cuenta de manera rapida y fácil"
/>
    </div>
  );
}
 