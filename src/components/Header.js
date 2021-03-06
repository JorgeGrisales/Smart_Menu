import React from 'react';
import '../style/Header.css';

export const Header = props =>{
  const { companyName, navBar, buttonText } = props;

  return(
    <div className="Header">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 
                       border-bottom shadow-sm">
      
        <img className="Logo" src="./img/smart-menu.png" alt="Logo" />
        
    
  <h4 className="my-0 mr-md-auto font-weight-normal">{companyName}</h4>
  <nav className="my-2 my-md-0 mr-md-3">

 {navBar.map((item, index) => {
  return(

    <a
key={`item-navbar-${index}`}
className="btn btn-outline-light"
href={item.url}
>

{item.name}
</a>

);
})}
</nav>
<a className="btn btn-light" href="/">
  {buttonText}
  </a>
</div>
</div>

  );
};