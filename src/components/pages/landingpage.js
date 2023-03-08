import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useElementOnScreen } from '../../utils/ElementOnScreen';
const Landing = () => {
    const navigate = useNavigate();

    //navigate to pressed product button
    const handleShampooClick = () => {
        navigate("/shampoo");
    }
    const handleConditionerClick = () => {
        navigate("/conditioner");
    }
    const handleSprayClick = () => {
        navigate("/spray");
    }
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    //disappear and reappear products opacity 0.3 opacity 1
    const onScreen1 = useElementOnScreen(ref1);
    const onScreen2 = useElementOnScreen(ref2);
    const onScreen3 = useElementOnScreen(ref3);
    return (
        <div className="wrapper">
            <section className="navbar" >
                <div className="navbar-text">
                    <img src="glissBlue2.png" alt="no gliss" className="gliss" />
                    <div className="breaking-line"></div>
                    <div className="columnText">
                        <span className="primaryText">HEALTHY HAIR</span>
                        <span className="secondaryText">TO BE CONFIDENT</span>
                    </div>
                </div>
                <img src="allAQUA3.png" alt="shampoos not responding" className="shampoos" />
            </section>

            <section className="firstSection" >
                <img src="aquasplash6.png" alt="aqua not responding" className="aquaShampoo" ref={ref1} style={
                    {
                        // disappear reappear
                        opacity: onScreen1 ? 1 : 0.1,
                        transition: "all 1s"
                    }
                } />
                <div className="shampooDescription" ref={ref1} style={
                    {
                        // disappear reappear
                        opacity: onScreen1 ? 1 : 0.1,
                        transition: "all 1s"
                    }
                }>
                    <span className="secondaryText">
                        <strong>Schwarzkopf Gliss Aqua Revive</strong> moisturizes and visibly improves the quality of your hair, without weighing it down!</span>
                    <button onClick={handleShampooClick} className="aquaCheckout"><span>Buy Aqua Revive Shampoo 5$</span></button>
                </div>
            </section>

            <section className="secondSection" >
                <div className="conditionerDescription" ref={ref2} style={
                    {
                        // disappear reappear
                        opacity: onScreen2 ? 1 : 0.1,
                        transition: "all 1s"
                    }
                }>
                    <span className="secondaryText">
                        <strong>The Aqua Revive</strong> product line was created to emphasize the beauty and answer all the needs of dry and normal hair.</span>
                    <button onClick={handleConditionerClick} className="aquaCheckout"><span>Buy Aqua Revive Conditioner 8$</span></button>
                </div>
                <img src="conditionerSplash3.png" alt="aqua not responding" className="aquaConditioner" ref={ref2} style={
                    {
                        // disappear reappear
                        opacity: onScreen2 ? 1 : 0.1,
                        transition: "all 1s"
                    }
                } />
            </section>

            <section className="thirdSection">
                <img src="aquaSpray.png" alt="aqua not responding" className="aquaSpray" ref={ref3} style={
                    {
                        // disappear reappear
                        opacity: onScreen3 ? 1 : 0.1,
                        transition: "all 1s"
                    }
                } />
                <div className="sprayDescription" ref={ref3} style={
                    {
                        // disappear reappear
                        opacity: onScreen3 ? 1 : 0.1,
                        transition: "all 1s"
                    }
                }>
                    <span className="secondaryText">
                        A rich yet light formula with a complex of <strong>hyaluronic acid</strong> and <strong>sea algae</strong> for a feeling of hydration and shine.</span>
                    <button onClick={handleSprayClick} className="aquaCheckout"><span>Buy Aqua Revive Express 4$</span></button>
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
                </div>
                <div className="footerInfoRight">
                    <a href="#">PRIVACY POLICY  </a>
                    <a href="#"> TERMS & CONDITIONS</a>
                </div>
            </footer>
        </div>
    );
};

export default Landing;