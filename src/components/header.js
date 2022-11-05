import React from "react";

const Header = props => (

    <div className="header">
        <div className="header__USD">
            <div className="header__images1"></div>
            <div className="header__info">
                <p>{props.buy__USD} / {props.sale__USD}</p>
            </div>
        </div>
        <div className="header__EUR">
            <div className="header__images"></div>
            <div className="header__info">
                <p>{props.buy__EUR} / {props.sale__EUR}</p>
            </div>            
        </div>
    </div>
);

export default Header;