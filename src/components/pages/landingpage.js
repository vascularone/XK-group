import React from "react";
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/shippingpage");
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
                <img src="aquaSplash.png" alt="aqua not responding" className="aquaShampoo" />
                <div className="shampooDescription">
                    <span className="secondaryText">
                        <strong>Schwarzkopf Gliss Aqua Revive</strong> moisturizes and visibly improves the quality of your hair, without weighing it down!</span>
                    <button onClick={handleClick} className="aquaCheckout"><span>Buy now</span></button>
                </div>
            </section>

            <section className="secondSection">
                <div className="conditionerDescription">
                    <span className="secondaryText">
                        <strong>Schwarzkopf Gliss Aqua Revive</strong> moisturizes and visibly improves the quality of your hair, without weighing it down!</span>
                    <button onClick={handleClick} className="aquaCheckout"><span>Buy now</span></button>
                </div>
                <img src="conditionerSplash2.png" alt="aqua not responding" className="aquaConditioner" />
            </section>

            <section className="thirdSection">
                <img src="aquaSpray.png" alt="aqua not responding" className="aquaSpray" />
                <div className="sprayDescription">
                    <span className="secondaryText">
                        <strong>Schwarzkopf Gliss Aqua Revive</strong> moisturizes and visibly improves the quality of your hair, without weighing it down!</span>
                    <button onClick={handleClick} className="aquaCheckout"><span>Buy now</span></button>
                </div>
            </section>
        </div>
    );
};

export default Landing;