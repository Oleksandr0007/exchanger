import React from "react";
import Header from "./components/header";
import Exchanger from "./components/Exchanger";
import Footer from "./components/Footer";

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.getCourse();
        this.state = { // add states to currencies
            currencyOne: '',
            currencyTwo: '',
            resoult: '',
            resoultTwo: '',
            rightAnswerId: 'USD',
            rightAnswerIdTwo: 'UAH'
        }
    }
    state = {   // add states to currencies
        base__ccy: undefined,
        ccy__USD: undefined,
        buy__USD: undefined,
        sale__USD: undefined,
        ccy__EUR: undefined,
        buy__EUR: undefined,
        sale__EUR: undefined,
        ccy__BTC: undefined,
        base__btc: undefined,
        buy__BTC: undefined,
        sale__BTC: undefined
    }
    
    getCourse = async (e) => {
        const api_url = await fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
        const data = await api_url.json();        // get PrivatBank public API    
        const arr_usd = data.find(({ ccy }) => ccy === "USD");
        const arr_eur = data.find(({ ccy }) => ccy === "EUR");
        const arr_btc = data.find(({ ccy }) => ccy === "BTC");

        this.setState({  // give states to currencies
            base__ccy: arr_usd.base_ccy,
            ccy__USD: arr_usd.ccy,
            buy__USD: arr_usd.buy,
            sale__USD: arr_usd.sale,
            ccy__EUR: arr_eur.ccy,
            buy__EUR: arr_eur.buy,
            sale__EUR: arr_eur.sale,
            ccy__BTC: arr_btc.ccy,
            base__btc: arr_btc.base_ccy,
            buy__BTC: arr_btc.buy,
            sale__BTC: arr_btc.sale 
        });
    }

    selectChangeHandler = (e) => {    // get values from first select
        this.setState({rightAnswerId : e.target.value});
        this.setState({resoult: ''});
        this.setState({resoultTwo: ''});
    }

    selectChangeHandlerTwo = (e) => { //get values from second select
        this.setState({rightAnswerIdTwo : e.target.value});
        this.setState({resoult: ''});
        this.setState({resoultTwo: ''});
    }

    onValueChange = (e) => {   //the main functionality of the converter
        this.setState({currencyOne : e.target.value});
        this.setState({resoultTwo: e.target.value});
        if (this.state.rightAnswerId === 'USD' & this.state.rightAnswerIdTwo === 'UAH'){
            this.setState({resoult : (e.target.value * this.state.buy__USD).toFixed(2)});
        } else if(this.state.rightAnswerId === 'EUR' & this.state.rightAnswerIdTwo === 'UAH'){
            this.setState({resoult : (e.target.value * this.state.buy__EUR).toFixed(2)});
        } else if(this.state.rightAnswerId === 'UAH' & this.state.rightAnswerIdTwo === 'UAH'){
            this.setState({resoult : e.target.value});
        } else if (this.state.rightAnswerId === 'USD' & this.state.rightAnswerIdTwo === 'USD'){
            this.setState({resoult : e.target.value});
        } else if(this.state.rightAnswerId === 'EUR' & this.state.rightAnswerIdTwo === 'USD'){
            this.setState({resoult : (this.state.buy__EUR / this.state.buy__USD * e.target.value).toFixed(2)});
        } else if(this.state.rightAnswerId === 'UAH' & this.state.rightAnswerIdTwo === 'USD'){
            this.setState({resoult : (e.target.value / this.state.buy__USD).toFixed(2) });
        } else if (this.state.rightAnswerId === 'USD' & this.state.rightAnswerIdTwo === 'EUR'){
            this.setState({resoult : (this.state.buy__USD / this.state.buy__EUR * e.target.value).toFixed(2)});
        } else if(this.state.rightAnswerId === 'EUR' & this.state.rightAnswerIdTwo === 'EUR'){
            this.setState({resoult : e.target.value});
        } else if(this.state.rightAnswerId === 'UAH' & this.state.rightAnswerIdTwo === 'EUR'){
            this.setState({resoult : (e.target.value / this.state.buy__EUR).toFixed(2) });
        }
    }
    onValueChangeTwo = (e) => {
        this.setState({currencyTwo : e.target.value});
        this.setState({resoult: e.target.value});
        if(this.state.rightAnswerIdTwo === 'UAH' & this.state.rightAnswerId === 'USD') {
            this.setState({resoultTwo : (e.target.value / this.state.buy__USD).toFixed(2)});
        } else if(this.state.rightAnswerIdTwo === 'UAH' & this.state.rightAnswerId === 'EUR'){
            this.setState({resoultTwo : (e.target.value / this.state.buy__EUR).toFixed(2)});
        } else if(this.state.rightAnswerIdTwo === 'UAH' & this.state.rightAnswerId === 'UAH'){
            this.setState({resoultTwo : e.target.value});
        } else if(this.state.rightAnswerIdTwo === 'USD' & this.state.rightAnswerId === 'USD'){
            this.setState({resoultTwo : e.target.value});
        } else if(this.state.rightAnswerIdTwo === 'USD' & this.state.rightAnswerId === 'EUR'){
            this.setState({resoultTwo : (this.state.buy__USD / this.state.buy__EUR * e.target.value).toFixed(2)});
        } else if(this.state.rightAnswerIdTwo === 'USD' & this.state.rightAnswerId === 'UAH'){
            this.setState({resoultTwo : (this.state.buy__USD * e.target.value).toFixed(2)});
        } else if(this.state.rightAnswerIdTwo === 'EUR' & this.state.rightAnswerId === 'USD'){
            this.setState({resoultTwo : (this.state.buy__EUR / this.state.buy__USD * e.target.value).toFixed(2)});
        } else if(this.state.rightAnswerIdTwo === 'EUR' & this.state.rightAnswerId === 'EUR'){
            this.setState({resoultTwo : e.target.value});
        } else if(this.state.rightAnswerIdTwo === 'EUR' & this.state.rightAnswerId === 'UAH'){
            this.setState({resoultTwo : (e.target.value * this.state.buy__EUR).toFixed(2)});
        }
    }


    render() {
        return (  //output to the page
            <div className="wrapper">
                <div className="page">
                    <Header 
                    buy__USD={this.state.buy__USD}
                    sale__USD={this.state.sale__USD}
                    buy__EUR={this.state.buy__EUR}
                    sale__EUR={this.state.sale__EUR}
                    />
                    <Exchanger 
                    ccy__USD={this.state.ccy__USD}
                    ccy__EUR={this.state.ccy__EUR}
                    base__ccy={this.state.base__ccy}
                    resoult={this.state.resoult}
                    resoultTwo={this.state.resoultTwo}
                    selectChangeHandler={this.selectChangeHandler}
                    onValueChange={this.onValueChange}
                    onValueChangeTwo={this.onValueChangeTwo}
                    selectChangeHandlerTwo={this.selectChangeHandlerTwo}
                    />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;