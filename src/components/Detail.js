import React from 'react';
import '../style/Detail.css';

export const Detail = (props) => {

  const {tarjetas, primera, segunda, tercera, precio1, precio2, precio3, fundado1, fundado2, fundado3, buttonT} = props;

 return (
   <div className="Detail">
     <div className="container">
 <div className="card-deck mb-3 text-center">
   <div className="card mb-4 shadow-sm ">
     <div className="card-header">
     <img className="Logo" src="https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png" alt="Logo" />
       <h4 className="my-0 font-weight-normal"> {primera} </h4>
     </div>
     <div className="card-body ">
       <h1 className="card-title pricing-card-title"> {precio1} <small className="text-muted">{fundado1}</small></h1>
       <ul className="list-unstyled mt-3 mb-4">
       {tarjetas.map((item) => {
           return (
             <ul className="list-unstyled mt-3 mb-4">
             <li>{item.p1}</li>
             <li>{item.p2}</li>
             <li>{item.p3}</li>
             <li>{item.p4}</li>
           </ul>
           );
         })}
       </ul>
       <button type="button" className="btn btn-lg btn-block btn-primary">{buttonT}</button>
     </div>
   </div>
   <div className="card mb-4 shadow-sm">
     <div className="card-header">
     <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png" alt="Logo" />
       <h4 className="my-0 font-weight-normal">{segunda}</h4>
     </div>
     <div className="card-body">
       <h1 className="card-title pricing-card-title">{precio2} <small className="text-muted">{fundado2}</small></h1>
       <ul className="list-unstyled mt-3 mb-4">
       {tarjetas.map((item) => {
           return (
             <ul className="list-unstyled mt-3 mb-4">
             <li>{item.s1}</li>
             <li>{item.s2}</li>
             <li>{item.s3}</li>
             <li>{item.s4}</li>
           </ul>
           );
         })}
       </ul>
       <button type="button" className="btn btn-lg btn-block btn-primary">{buttonT}</button>
     </div>
   </div>
   <div className="card mb-4 shadow-sm">
     <div className="card-header">
     <img className="Logo" src="https://i1.wp.com/www.elpoderdelasideas.com/wp-content/uploads/restaurantes_subway_2016_flechas.png?resize=600%2C638" alt="Logo" />
       <h4 className="my-0 font-weight-normal">{tercera}</h4>
     </div>
     <div className="card-body">
       <h1 className="card-title pricing-card-title">{precio3} <small className="text-muted">{fundado3}</small></h1>
       <ul className="list-unstyled mt-3 mb-4">
       {tarjetas.map((item) => {
           return (
             <ul className="list-unstyled mt-3 mb-4">
             <li>{item.t1}</li>
             <li>{item.t2}</li>
             <li>{item.t3}</li>
             <li>{item.t4}</li>
           </ul>
           );
         })}
       </ul>
       <button type="button" className="btn btn-lg btn-block btn-primary">{buttonT}</button>
     </div>
   </div>
 </div>
 
</div>
</div>
 );
};
      