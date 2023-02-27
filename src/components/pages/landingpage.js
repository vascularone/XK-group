import React from "react";

const Landing = () => {
    return (
        <div className="wrapper">
            <section className="firstSection">
                <div className="shampoos">
                    <img src="glissHairPro.png" alt="no gliss" className="gliss" />
                    <span className="shampooText">SHAMPOOS</span>
                    <img src="allShampoos12.png" alt="no shampoos" className="allShampoos" />
                </div>
            </section>
            <section className="secondSection">
                <div className="conditioners">
                    <span className="conditionerText">CONDITIONERS</span>
                    <img src="conditioners.png" alt="no conditioners" className="allConditioners" />
                </div>
            </section>
            <section className="thirdSection">

            </section>
        </div>
    );
};

export default Landing;