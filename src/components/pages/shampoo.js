import "../css/productCSS.css";
import { useNavigate } from 'react-router-dom';
const Shampoo = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        // store product data into locastorage to use in thankyoupage
        localStorage.setItem("price", 5);
        localStorage.setItem("item-name", "Aqua Revive Shampoo");
        localStorage.setItem("item-id", 44155144);
        navigate('/shippingpage');
    }
    return (
        <div>
            <section className="shampooSection">
                <div className="shampooDetails">
                    <span className="shampooTitle">Aqua Revive Shampoo</span>
                    <span className="shampooDescription2">The <strong className="glissAqua">Schwarzkopf Gliss Aqua Revive Shampoo</strong> will moisturize and visibly improve the quality of your hair, without weighing it down!</span>
                    <ul>
                        <li className="shampooDescription3">Moisturization: up to 48 hours of moisturized hair feeling</li>
                        <li className="shampooDescription3">Shiny and healthy-looking hair: Cared for hair full of healthy shine</li>
                        <li className="shampooDescription3">Suitable for everyday use</li>
                        <li className="shampooDescription3">Natural ingredients: 90% ingredients of natural origin (including water)</li>
                    </ul>
                    <div className="shippingbuttons">
                        <button className="buyButton" onClick={handleClick}>Buy Aqua Revive Shampoo</button>
                    </div>
                </div>
                <img src="aquaSplash3.png" alt="noaquaSplash" className="shampooProduct" />
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
                </div>
                <div className="footerInfoRight">
                    <a href="#">PRIVACY POLICY  </a>
                    <a href="#"> TERMS & CONDITIONS</a>
                </div>
            </footer>
        </div>
    );
}

export default Shampoo;
