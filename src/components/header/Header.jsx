import React from "react";
import "./header.css";
import logo from "../../media/statics_logo.png";
import account from "../../media/statics_account.png";
import shoppingCart from "../../media/statics_shopping-cart.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
      <input type="text" placeholder="O qué esta procurando?" />
      <div className="account-cart-container">
        <div>
          <img src={account} alt="account" />
        </div>
        <p>Minha Conta</p>
        <div>
          <img src={shoppingCart} alt="cart" />
        </div>
        <p>1</p>
      </div>
    </div>
  );
};

export default Header;
