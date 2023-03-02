import { useState, useMemo } from "react";
import $ from "jquery";
import '../../App.css';
import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
import "./dropDown.css"
import countryList from 'react-select-country-list'
const Shipping = () => {
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

    return (
        <div className="App">
            {/* First Name, Last Name, ZIP/Postal Code, Address, Apt/suite, City,
State (must be select box), Phone Number, and Email Address. */}
            {/* <header /> */}
            <section className="shippingSection">
                <span>Billing info</span>
                <form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onSubmit={(event) => handleSumbit(event)}
                    className="shippingForm"
                >
                    <div className="row">

                        <div className="col">
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
                            <span className="pn">Phone Number: </span>
                            <input
                                type="text"
                                id="number"
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                            <span>Email: </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="col">

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
                            <span>ZIP Code: </span>
                            <input
                                type="zip"
                                id="zip"
                                name="zip"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                            <span>State: </span>
                            <Dropdown options={options} onChange={() => setState(state)} value={state} placeholder="Select a state" />;
                        </div>

                    </div>
                </form>
                {/* <form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onSubmit={(event) => handleSumbit(event)}
                    className="shippingForm"
                >
                    <div className="inputForm first-last">
                        <label htmlFor="name" className="shippingLabel">First name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => handleChange(event)}
                        />
                        <label htmlFor="name" className="shippingLabel">Last name: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>

                    <div className="inputForm zip-adress">
                        <div className="zipLabel">
                            <label htmlFor="name" className="shippingLabel">ZIP Code: </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(event) => handleChange(event)}
                            />
                        </div>
                        <label htmlFor="name" className="shippingLabel">Adress: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <div className="inputForm apt-city">
                        <label htmlFor="name" className="shippingLabel">Apt/Suite: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => handleChange(event)}
                        />
                        <br />
                        <label htmlFor="name" className="shippingLabel">City: </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    <br />
                    <label htmlFor="name" className="shippingLabel">Sate: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
                    <label htmlFor="name" className="shippingLabel">Phone number: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
                    <label htmlFor="name" className="shippingLabel">Email adress: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
                    <button type="submit" className="shippingButton">Submit</button>
                </form> */}
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
                    <img src="glissProfess.png" alt="gliss missing"></img>
                </div>
                <div className="footerInfoRight">
                    <a href="#">PRIVACY POLICY  </a>
                    <a href="#"> TERMS & CONDITIONS</a>
                </div>
            </footer>
        </div>
    );
}

export default Shipping;
