import { useRef, useState } from "react";
import '../css/shipping.css';
import { useNavigate } from "react-router-dom";
import "./dropDown.css"
const Shipping = () => {
    const navigate = useNavigate();
    const name = useRef(localStorage.getItem("name") || null);
    const number = useRef(null);
    const email = useRef(null);
    const state = useRef(null);
    const zip = useRef(null);
    const city = useRef(null);
    const address = useRef(null);
    const [valid, setValid] = useState(false);
    function validatePhoneNumber(number) {
        // Regular expression to match US phone numbers
        const phoneRegex = /^\+?1?\-?\(?\d{3}\)?[\- ]?\d{3}[\- ]?\d{4}$/;

        // Remove all non-digit characters from the input
        if (phoneRegex.test(number))
            return "";

        return "Not valid";
    }
    const handlePhoneChange = (event) => {
        const inputValue = event.target.value;
        let numericValue = inputValue.replace(/\D/g, "");
        let maxLength = 10;
        if (numericValue.startsWith("1")) {
            numericValue = `+1${numericValue.slice(1)}`;
            maxLength += 1; // Increase the maximum length to 11
        }
        const limitedValue = numericValue.slice(0, maxLength);
        const validation = validatePhoneNumber(limitedValue);
        const formattedValue = limitedValue.replace(/^(\d{3})(\d{3})(\d{4})$/, "($1) $2-$3");
        event.target.value = formattedValue;
        setValid(validation)
    }
    const usStates = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name.current.value);
        localStorage.setItem("email", email.current.value);
        localStorage.setItem("zip", zip.current.value);
        localStorage.setItem("address", address.current.value);
        localStorage.setItem("phoneNumber", number.current.value);
        localStorage.setItem("city", city.current.value);
        localStorage.setItem("state", state.current.value);
        navigate('/checkoutpage');
    };
    return (
        <div className="App">
            <section className="shippingSection">
                <img src="glissProfess.png" alt="no glissProfess" className="shippingGliss" />
                <span className="billing-info">BILLING INFORMATION</span>
                <form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onSubmit={handleSubmit}
                    className="shippingForm"
                >
                    <div className="col">

                        <div className="row">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                ref={name}
                                placeholder="Full name"
                                required
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                ref={email}
                                required
                            />
                        </div>

                        <div className="row">
                            <div className="row">
                                {valid}
                                <input
                                    type="tel"
                                    id="number"
                                    name="number"
                                    placeholder="Phone number (XXX) XXX-XXXX"
                                    ref={number}
                                    required
                                    onChange={handlePhoneChange}
                                /></div>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                ref={city}
                                required
                            />
                        </div>
                        <div className="row">
                            <input
                                type="adress"
                                id="adress"
                                name="adress"
                                className="adress"
                                placeholder="Adress"
                                ref={address}
                                required
                            />
                            <input
                                type="number"
                                id="zip"
                                name="zip"
                                className="zip"
                                placeholder="ZIP"
                                ref={zip}
                                required
                            />
                            <select
                                required
                                className="states"
                                ref={state}
                            >
                                {usStates.map((states) => (
                                    <option key={states} value={states}>
                                        {states}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button type="submit" className="aquaShipping">Submit</button>
                    </div>
                </form>
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
