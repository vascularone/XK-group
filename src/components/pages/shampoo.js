import { useState } from "react";
import $ from "jquery";
import "./productCSS.css";
const Shampoo = () => {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
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
        <div>
            <header>

            </header>
            <section className="shampooDetails">
                <span className="shampooTitle">Aqua Revive Shampoo</span>
                <span className="shampooDescription2">The <strong>Schwarzkopf Gliss Aqua Revive Shampoo</strong> will moisturize and visibly improve the quality of your hair, without weighing it down!</span>
                <ul>
                    <li className="shampooDescription3">Moisturization: up to 48 hours of moisturized hair feeling</li>
                    <li className="shampooDescription3">Shiny and healthy-looking hair: Cared for hair full of healthy shine</li>
                    <li className="shampooDescription3">Suitable for everyday use</li>
                    <li className="shampooDescription3">Natural ingredients: 90% ingredients of natural origin (including water)</li>
                </ul>
                <div className="shippingbuttons">
                    <button className="buyButton">Buy Aqua Revive Shampoo</button>
                    <button className="ingredientButton">Ingredients</button>
                </div>
            </section>
            {/* <section>
                First Name, Last Name, ZIP/Postal Code, Address, Apt/suite, City,
State (must be select box), Phone Number, and Email Address.
            </section> */}
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
                    <img src="glissPro.png" alt="gliss missing"></img>
                </div>
                <div className="footerInfoRight">
                    <a href="#">PRIVACY POLICY  </a>
                    <a href="#"> TERMS & CONDITIONS</a>
                </div>
            </footer>
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
        </div>
    );
}

export default Shampoo;
