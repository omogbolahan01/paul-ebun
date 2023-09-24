import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  // const [isFormVisible, setFormVisibility] = useState(false);
  // function showButton() {
  //   setFormVisibility(!isFormVisible);
  // }
  // function closeForm() {
  //   setFormVisibility(false);
  // }
  return (
    <div className="contact-area">
      <div className="contactt">
        <div className="contact-part">
          <div className="contact-text">
            <h2>Contact us</h2>
            <p>
              You can reach us by filling out the contact form below or through
              our contact information provided. Our team is committed to
              providing timely and professional responses to your inquiries.
            </p>
          </div>
          <div className="contact-detail">
            <h3>Contact Information</h3>
            <p>
              For general inquiries, you can reach us at [insert email address]
              or call [insert phone number] during our office hours, [insert
              hours].
            </p>
          </div>
          <div className="contact-donate">
            <h3>Donate</h3>
            <p>
              To donate or partner with us, please contact our fundraising team
              at [insert email address] or call [insert phone number].
            </p>
          </div>
        </div>
        <div className="contact-formarea">
          <p>
            Please fill out the form below to send us a message, and we will get
            back to you as soon as possible.
          </p>
          <div>
            <h3>Name</h3>
            <input
              type="text"
              placeholder=""
              className="form--input"
              name="topText"
            />
          </div>
          <div>
            <h3>Email</h3>
            <input
              type="text"
              placeholder=""
              className="form--input"
              name="bottomText"
            />
          </div>

          <div>
            <h3>Message</h3>
            <input
              type="text"
              placeholder=""
              className="form--input2"
              name="bottomText"
            />
          </div>
          <button className="contact-send">send</button>
        </div>
      </div>

      <div className="last-area">
        <h3>
          We invite you to join us in our mission to support OVCs and help them
          achieve their dreams. Whether you want to volunteer your time, make a
          donation, or become a partner organization, we welcome your support
          and look forward to working together to make a positive impact in our
          community.
        </h3>
        <Link to="/form?source=contact">
          <button className="donate-btn">
            <img src="/images/Frame 40.png" />
          </button>
        </Link>
      </div>
      {/* {isFormVisible && (
        <div className="form-donate2">
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
      )} */}
    </div>
  );
}
