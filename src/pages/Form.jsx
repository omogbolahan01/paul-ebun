// src/components/Form.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const sourcePage = queryParams.get("source") || "/";

  const closeForm = () => {
    navigate(-1); // Return to the source page
  };

  return (
    <div>
      <div className="form-donate">
        <div className="pay-form2">
          <div className="form-pics">
            <img src="/images/Rectangle 30.png" />
          </div>
          <div className="donate-form">
            <h2>Donate and support</h2>
            <div>
              <h3>Full name</h3>
              <input
                type="text"
                placeholder="Enter your name"
                className="form--input3"
                name="topText"
              />
            </div>
            <div>
              <h3>Enter amount</h3>
              <input
                type="text"
                placeholder="$"
                className="form--input3"
                name="bottomText"
              />
            </div>
            <h3>Enter your card details</h3>
            <div>
              <h3>Card number</h3>
              <input
                type="text"
                placeholder=""
                className="form--input3"
                name="bottomText"
              />
            </div>
            <div className="form-grid1">
              <div>
                <h3>Exp date</h3>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="form--input12"
                  name="bottomText"
                />
              </div>
              <div>
                <h3>CVV</h3>
                <input
                  type="text"
                  placeholder=""
                  className="form--input12"
                  name="bottomText"
                />
              </div>
            </div>
            <div className="pay-area">
              <div>
                <button className="pay-form">Pay</button>
              </div>
              <div>
                {" "}
                <img src="/images/Frame 117.png" />
              </div>
              <div>
                <button className="pay-pal">
                  <img src="/images/Group 28.png" />
                </button>
              </div>
            </div>
          </div>
          <button onClick={closeForm} className="close-line">
            <img src="/images/close-line.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
