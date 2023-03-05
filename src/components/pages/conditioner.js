import { useState } from "react";
import "../css/productCSS.css";
import { useNavigate } from 'react-router-dom';
const Conditioner = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [toggle2, setToggle2] = useState(true);
    const handleClick = () => {
        localStorage.setItem("price", 600);
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
                        {toggle2 && (<button className="ingredientButton" onClick={() => { setToggle(!toggle); setToggle2(!toggle2) }}>
                            <span>Ingredients</span>
                        </button>)}
                        {toggle && (<div className="ingredients">
                            <button className="closeIngredients" onClick={() => { setToggle2(!toggle2); setToggle(!toggle) }}>Close</button>
                            <span className="ingredientsSpan">Aqua (Water, Eau) · Cetearyl Alcohol · Quaternium-87 · Stearamidopropyl Dimethylamine · Dimethicone · Distearoylethyl Hydroxyethylmonium Methosulfate · Citric Acid · Glycerin · Dicaprylyl Carbonate · Sodium Benzoate · Dimethiconol · Potassium Sorbate · Polyquaternium-37 · Benzyl Alcohol · Parfum (Fragrance)</span>
                        </div>)}
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
