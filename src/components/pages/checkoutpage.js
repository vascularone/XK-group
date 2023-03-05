import { useRef, useState } from "react";
import '../css/checkout.css';
import { useNavigate } from "react-router-dom";
const Shipping = () => {
    const navigate = useNavigate();
    const cardName = useRef(null);
    const cardNumber = useRef(null);
    const selectedMonth = useRef(null);
    const selectedYear = useRef(null);
    const cvv = useRef(null);
    const [cardNumberValidation, setCardNumberValidation] = useState('');
    const [cardCVVValidation, setCardCVVValidation] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [expError, setExpError] = useState('');
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
        const value = e.target.value.replace(/\s/g, '');
        const validation = validateCardNumber(value);
        setCardNumberValidation(validation);
    }

    const handleCVVChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/\D/g, "");
        const maxLength = 4;
        const limitedValue = numericValue.slice(0, maxLength);
        const validation = validateCVV(limitedValue);
        event.target.value = limitedValue;
        setCardCVVValidation(validation);
    };

    function validateExpDate(expMonth, expYear) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        if (expMonth > currentMonth || expYear > currentYear) {
            return '';
        } else {
            return 'Expired';
        }
    }

    function validateCardNumber(cardNumber) {
        const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
        const amexRegEx = /^(?:3[47][0-9]{13})$/;

        if (visaRegEx.test(cardNumber)) {
            return 'visa';
        } else if (mastercardRegEx.test(cardNumber)) {
            return 'mastercard';
        } else if (amexRegEx.test(cardNumber)) {
            return 'amex';
        } else {
            return 'Invalid card number';
        }
    }
    function validateCVV(cvv) {
        const cvvReg = /^[0-9]{3,4}$/;
        if (cvvReg.test(cvv))
            return "";
        else
            return "Invalid CVV";
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        formData.append('cardName', cardName.current.value);
        formData.append('cardNumber', cardNumber.current.value.replace(/\s/g, ''));
        formData.append('cardMonth', selectedMonth.current.value);
        formData.append('cardYear', selectedYear.current.value);
        formData.append('cardCVV', cvv.current.value);
        formData.append('name', localStorage.getItem('name'));
        const expValidation = validateExpDate(expMonth, expYear);
        setExpError(expValidation);
        fetch('http://localhost:8000/server.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    setCardNumberValidation(data.errors.cardNumber || '');
                    setCardCVVValidation(data.errors.cvv || '');
                    setExpError(data.errors.expCard || '');
                }
                else {
                    navigate('/thankyoupage');
                }
            })
            .catch(error => {
                console.error(error);

            });
    };

    return (
        <div className="App">
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
                            <span className="error-class">{cardNumberValidation}</span>
                        </div>
                        <div className="checkOutrow">
                            <span>Expiration Month</span>
                            <select
                                className="months"
                                required
                                ref={selectedMonth}
                                onChange={(e) => setExpMonth(e.target.value)}
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
                                onChange={(e) => setExpYear(e.target.value)}
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <span className="error-class">{expError}</span>
                        </div>
                        <div className="checkOutrow">
                            <input
                                type="tel"
                                ref={cvv}
                                className="cvv"
                                onChange={handleCVVChange}
                                placeholder="CVV"
                                required
                            />
                            <span className="error-class">{cardCVVValidation}</span>
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
