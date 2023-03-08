import "../css/productCSS.css";
import { useNavigate } from 'react-router-dom';
const Conditioner = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        // store product data into locastorage to use in thankyoupage
        localStorage.setItem("price", 8);
        localStorage.setItem("item-name", "Aqua Revive Conditioner");
        localStorage.setItem("item-id", 55155155);
        navigate("/shippingpage");
    }
    return (
        <div>
            <section className="shampooSection conditionerSection">
                <div className="shampooDetails conditionerDetails">
                    <span className="shampooTitle">Aqua Revive Conditioner</span>
                    <span className="shampooDescription2">Recommended for the body for delicate, sensitive and problematic skin - requiring high protection against intense sunlight, sunburn and harmful UVA / UVB radiation</span>
                    <ul>
                        <li className="shampooDescription3">Moisturization: up to 48 hours of moisturized hair feeling</li>
                        <li className="shampooDescription3">Shiny and healthy-looking hair: Cared for hair full of healthy shine</li>
                        <li className="shampooDescription3">Suitable for everyday use</li>
                        <li className="shampooDescription3">Natural ingredients: 90% ingredients of natural origin (including water)</li>
                    </ul>
                    <div className="shippingbuttons">
                        <button className="buyButton" onClick={handleClick}>Buy Aqua Revive Conditioner</button>
                    </div>
                </div>
                <img src="conditionerSplash3.png" alt="noaquaSplash" className="shampooProduct conditionerProduct" />
            </section >

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
        </div >
    );
}

export default Conditioner;
