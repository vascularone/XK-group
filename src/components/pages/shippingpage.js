import { useState, useMemo } from "react";
import $ from "jquery";
import '../css/shipping.css';
import Dropdown from 'react-dropdown';
import { useNavigate } from "react-router-dom";
// import 'react-dropdown/style.css';
import "./dropDown.css"
import countryList from 'react-select-country-list'
const Shipping = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [result, setResult] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [adress, setAdress] = useState("");
    const options = useMemo(() => countryList().getData(), [])
    const handleSumbit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
    const handleClick = () => {
        navigate("/checkoutpage");
    }

    return (
        <div className="App">
            <header />
            <section className="shippingSection">
                <form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onSubmit={(event) => handleSumbit(event)}
                    className="shippingForm"
                >
                    <span className="billing-info">BILLING INFORMATION</span>
                    <div className="col">

                        <div className="row">
                            <span>Name: </span>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span>Surname: </span>
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        </div>
                        <div className="row phone-number">
                            <span className="pn">Tel. : </span>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="row email">
                            <span>Email: </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row city-adress">

                            <span>City: </span>
                            <input
                                type="city"
                                id="city"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <span>Adress: </span>
                            <input
                                type="adress"
                                id="adress"
                                name="adress"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                            />
                        </div>
                        <div className="row zip-state">
                            <span>ZIP Code: </span>
                            <input
                                type="zip"
                                id="zip"
                                name="zip"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                            <span>State: </span>
                            <Dropdown options={options} onChange={() => setState(state)} value={state} placeholder="Select a state" />
                        </div>

                    </div>
                    <button type="submit" onClick={handleClick}></button>
                </form>
                <img src="glissProfess.png" alt="no glissProfess" className="shippingGliss" />
                <h1 style={{ color: "red" }}>{result}</h1>
            </section>
            <footer className="productFooter">
                <div className="footerInfoLeft">
                    <span>
                        <strong>CONTACT US</strong>
                    </span>
                    <span>
                        +383 49 123 456
                    </span>
                    <span>
                        info@gliss.com
                    </span>
                    <span>
                        <strong>Pristina, Kosovo</strong>
                    </span>
                </div>
                <div className="glissFooter">
                    <span>© Schwarzkopf Gliss Professional</span>
                    {/* <img src="glissProfess.png" alt="gliss missing"></img> */}
                </div>
                <div className="footerInfoRight">
                    <a href="#">PRIVACY POLICY  </a>
                    <a href="#"> TERMS & CONDITIONS</a>
                </div>
            </footer>
        </div >
    );
}

export default Shipping;
