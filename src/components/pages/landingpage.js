import React from "react";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleShampooClick = () => {
        navigate("/shampoo");
    }
    const handleConditionerClick = () => {
        navigate("/conditioner");
    }
    const handleSprayClick = () => {
        navigate("/spray");
    }
    return (
        <div className="wrapper">
            <section className="navbar">
                <div className="navbar-text">
                    <img src="glissHairPro.png" alt="no gliss" className="gliss" />
                    <div className="breaking-line"></div>
                    <span className="primaryText">HEALTHY HAIR</span>
                    <span className="secondaryText">TO BE CONFIDENT</span>
                </div>
                <img src="allAQUA3.png" alt="shampoos not responding" className="shampoos" />
                <div className="horizontal-line"></div>
            </section>

            <section className="firstSection">
                <img src="aquasplash6.png" alt="aqua not responding" className="aquaShampoo" />
                <div className="shampooDescription">
                    <span className="secondaryText">
                        <strong>Schwarzkopf Gliss Aqua Revive</strong> moisturizes and visibly improves the quality of your hair, without weighing it down!</span>
                    <button onClick={handleShampooClick} className="aquaCheckout"><span>Buy Aqua Revive Shampoo</span></button>
                </div>
            </section>

            <section className="secondSection">
                <div className="conditionerDescription">
                    <span className="secondaryText">
                        <strong>The Aqua Revive</strong> product line was created to emphasize the beauty and answer all the needs of dry and normal hair.</span>
                    <button onClick={handleConditionerClick} className="aquaCheckout"><span>Buy Aqua Revive Conditioner</span></button>
                </div>
                <img src="conditionerSplash3.png" alt="aqua not responding" className="aquaConditioner" />
            </section>

            <section className="thirdSection">
                <img src="aquaSpray.png" alt="aqua not responding" className="aquaSpray" />
                <div className="sprayDescription">
                    <span className="secondaryText">
                        A rich yet light formula with a complex of <strong>hyaluronic acid</strong> and <strong>sea algae</strong> for a feeling of hydration and shine.</span>
                    <button onClick={handleSprayClick} className="aquaCheckout"><span>Buy Aqua Revive Express</span></button>
                </div>
            </section>
            <footer>
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
                    <a href="#">PRIVACY POLICY  /</a>
                    <a href="#">\ TERMS & CONDITIONS</a>
                </div>
            </footer>
        </div>
    );
};

export default Landing;