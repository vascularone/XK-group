import '../css/thankyou.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
const Thankyou = () => {
    const navigate = useNavigate();

    const getStoredData = async () => {
        const cardObject = localStorage?.getItem('cardObject');
        console.log("OBJEKTI: ", cardObject);
    }

    useEffect(() => {
        getStoredData();
    }, [])

    return (
        <div className="App">
            {/* <img src="glissProfess.png" alt="no glissProfess" className="shippingGliss confirmGliss" /> */}
            <button className='backButton' onClick={() => navigate("/")}>&#8592; HOME</button>
            <section className="shippingSection confirmSection">
                <div className='confirmInfo'>
                    <label className="product-title confirmTitle">THANKS FOR YOUR ORDER</label>
                    <div className="checkOutcol checkOutdetails">
                        <div className="checkOutcol info-col">
                            <label className="product-title">BILING INFO</label>

                            <label className="productInfo">Name: {localStorage.getItem("name")}</label>
                            <label className="productInfo">Email: {localStorage.getItem("email")}</label>
                            <label className="productInfo">Tel.: {localStorage.getItem("phoneNumber")}</label>
                            <label className="productInfo">City: {localStorage.getItem("city")}</label>
                            <label className="productInfo">ZIP: {localStorage.getItem("zip")}</label>
                            <label className="productInfo">Address: {localStorage.getItem("address")}</label>
                            <label className="productInfo">State: {localStorage.getItem("state")}</label>
                        </div>
                        <div className="checkOutcol info-col">
                            <label className="product-title">PRODUCT INFO</label>
                            <label className="productInfo">Name: {localStorage.getItem("item-name")}</label>
                            <label className="productInfo">Id: {localStorage.getItem("item-id")}</label>
                            <label className="productInfo">Price: {localStorage.getItem("price")}$</label>
                        </div>
                    </div>
                </div>
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

export default Thankyou;
