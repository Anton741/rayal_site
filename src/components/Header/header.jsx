import { useState } from "react"; 
import "./header.scss"
import logo from "./logo.png"

const Header = () => {
  const [burger, setBurger] = useState(false);
  return ( 
    <header className = 'header'>
      <div className = 'container'>
        <div className="header__row">
            <div className= {burger ? 'burger burger-active' : 'burger'} onClick = {() => setBurger(!burger)}>
              <span></span>
            </div>
          <nav className="header__menu header__menu-left">
            <ul className={burger ? 'header__list header__list-active' : 'header__list'}>
              <li className="item__list"><a href="#" className="header__link">Home</a></li>
              <li className="item__list"><a href="#" className="header__link">Features</a></li>
              <li className="item__list"><a href="#" className="header__link">Gallary</a></li>
            </ul>
          </nav>
          <div className="header__logo">
            <img src={logo} alt="logo" srcset="" />
          </div>
          <nav className="header__menu header__menu-right">
            <ul className={burger ? 'header__list header__list-active' : 'header__list'}>
              <li className="item__list"><a href="#" className="header__link">Home</a></li>
              <li className="item__list"><a href="#" className="header__link">Features</a></li>
              <li className="item__list"><a href="#" className="header__link">Gallary</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;