import { useState, useRef } from "react";
import $ from "jquery";
import '../css/checkout.css';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Shipping = () => {
    const navigate = useNavigate();
    const cardName = useRef(null);
    const cardNumber = useRef(null);
    const selectedMonth = useRef(null);
    const selectedYear = useRef(null);
    const cvv = useRef(null);
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i <= 15; i++) {
        years.push(currentYear + i);
    }
    function formatCardNumber(value) {
        const cleanValue = value.replace(/\D/g, '');
        const truncatedValue = cleanValue.substring(0, 16);
        const match = truncatedValue.match(/^(\d{1,4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/);
        const formattedValue = match ? match.slice(1).filter(Boolean).join(' ') : '';
        return formattedValue;
    }
    const putCardNumber = (e) => {
        const formatted = formatCardNumber(e.target.value);
        e.target.value = formatted;
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        const maxLength = 3;
        const limitedValue = numericValue.slice(0, maxLength);
        event.target.value = limitedValue;
    };
    const months = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        formData.append('cardName', cardName.current.value);
        formData.append('cardNumber', cardNumber.current.value);
        formData.append('cardMonth', selectedMonth.current.value);
        formData.append('cardYear', selectedYear.current.value);
        formData.append('cardCVV', cvv.current.value);

        fetch('http://localhost:8000/server.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        navigate('/thankyoupage');
    };

    return (
        <div className="App">
            {/* <header /> */}
            <section className="shippingSection">
                <img src="glissProfess.png" alt="no glissProfess" className="shippingGliss" />
                <span className="billing-info">CARD INFORMATION</span>
                <form onSubmit={handleSubmit} className="checkoutForm">
                    <div className="checkOutcol">
                        <div className="checkOutrow">
                            <input
                                type="text"
                                placeholder="Name on card"
                                className="card"
                                ref={cardName}
                                required
                            />
                        </div>
                        <div className="checkOutrow">
                            <input
                                type="cardNumber"
                                className="card"
                                ref={cardNumber}
                                onChange={putCardNumber}
                                placeholder="Card Number (V , M , AE)"
                                required
                            />
                        </div>
                        <div className="checkOutrow">
                            <span>Expiration Month</span>
                            <select
                                className="months"
                                required
                                ref={selectedMonth}
                            >
                                {months.map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="checkOutrow">
                            <span>Expiration Year</span>
                            <select
                                className="year"
                                required
                                ref={selectedYear}
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="checkOutrow">
                            <input
                                type="tel"
                                ref={cvv}
                                className="cvv"
                                onChange={handleInputChange}
                                placeholder="CVV"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="aquaShipping">Checkout</button>
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
