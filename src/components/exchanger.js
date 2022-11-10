import React from "react";

const Exchanger = props => {
    return(
        <div className="exchanger">
            <div className="exchanger__section">
                <select className="exchanger__select" onChange={props.selectChangeHandler}>
                    <option value={props.buy__USD}>{props.ccy__USD}&emsp; $&emsp;</option>
                    <option value={props.buy__EUR}> {props.ccy__EUR}&emsp;€&emsp;</option>
                    <option value="1"> {props.base__ccy}&emsp; ₴&emsp;</option>
                </select>
                <input className="exchanger__input" type="number" placeholder="200.00" name="currencyOne" value={props.resoultTwo} onChange={props.onValueChange} ></input>
            </div>
            <div className="exchanger__section">
                <select className="exchanger__select" onChange={props.selectChangeHandlerTwo}>
                    <option value="1"> {props.base__ccy}&emsp; ₴&emsp;</option>
                    <option value={props.buy__USD}> {props.ccy__USD}&emsp; $&emsp;</option>
                    <option value={props.buy__EUR}> {props.ccy__EUR}&emsp; €&emsp; </option>
                </select>
                <input className="exchanger__input" type="number" placeholder="200.00" name="currencyTwo"  value={props.resoult} onChange={props.onValueChangeTwo} ></input>
            </div>
        </div>
    )
}

export default Exchanger;