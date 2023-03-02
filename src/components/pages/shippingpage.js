import { useState } from "react";
import $ from "jquery";
import "../../App.css";
const Shipping = () => {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [emailLabelStyle, setEmailLabelStyle] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);

        // Check if the input field is not empty
        if (e.target.value !== '') {
            setEmailLabelStyle({
                textShadow: '2px 0 0 teal,0 2px 0 teal,-2px 0 0 teal,0 -2px 0 teal',
                transform: 'translateX(-5rem)',
                transition: 'all 0.2s',
            });
        } else {
            setEmailLabelStyle({
                transition: 'all 0.3s'
            });
        }

    };

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
            {/* <form
                action="http://localhost:8000/server.php"
                method="post"
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1> */}
            {/* First Name, Last Name, ZIP/Postal Code, Address, Apt/suite, City,
State (must be select box), Phone Number, and Email Address. */}
            <section className="shippingSection">
                {/* <form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onSubmit={(event) => handleSumbit(event)}
                    className="shippingForm"
                >
                    <label htmlFor="name" className="shippingLabel secondaryText">First name: </label>
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
                    <br />
                    <label htmlFor="name" className="shippingLabel">ZIP/Postal Code: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
                    <label htmlFor="name" className="shippingLabel">Adress: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange(event)}
                    />
                    <br />
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
                <form
                    action="http://localhost:8000/server.php"
                    method="post"
                    onSubmit={(event) => handleSumbit(event)}>
                    <div className="contactMeInputs">
                        <span className="contact-span" >Email</span>
                        <input
                            type="email"
                            className="contact-input email-input"
                            id="email"
                            name="email"
                            value={name}
                            onChange={(event) => handleChange(event)}
                            style={{ emailLabelStyle }}
                            required
                        />
                        <span className="contact-span" >Subject</span>
                        <input type="text" className="contact-input subject-input" required />
                        <span className="contact-span" >Message</span>
                        <textarea className="contact-input message-input" name="message" rows="4" cols="40" required></textarea>
                    </div>
                    <button className="submit-button">Submit</button>
                </form>
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
