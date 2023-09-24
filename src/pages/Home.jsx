import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // const [isFormVisible, setFormVisibility] = useState(false);
  // function showButton() {
  //   setFormVisibility(!isFormVisible);
  // }
  // function closeForm() {
  //   setFormVisibility(false);
  // }

  return (
    <div className="homepageContainer">
      <div>
        <img src="/images/Frame 85.png" />
      </div>
      <div className="area-how">
        <div className="how-area">
          <p>All effort matters</p>
          <h2>How could you help?</h2>
        </div>
        <div className="how-flex">
          <div className="flex-how">
            <img src="/images/image 25.png" alt="" />
            <h2>Become a volunteer</h2>
            <p>
              Join Edu-Kids Foundation as a volunteer and help make a difference
              in the lives of orphaned and vulnerable children.{" "}
            </p>
          </div>
          <div className="flex-how">
            <img src="/images/image 27.png" alt="" />
            <h2>Call for Donation</h2>
            <p>
              Make a difference in the lives of orphaned and vulnerable children
              by donating to Edu-Kids Foundation.{" "}
            </p>
          </div>
          <div className="flex-how">
            <img src="/images/image 26.png" alt="" />
            <h2>Support</h2>
            <p>
              Support Edu-Kids Foundation and help orphaned and vulnerable
              children in need.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="why-flex">
        <div>
          <img src="/images/Frame 111 (1).png" className="pics-01" />
        </div>
        <div>
          <img src="/images/Group 9.png" />
        </div>
      </div>
      <div className="donation-area">
        <div className="donation-text">
          <h2>Introducing our Donation Campaign</h2>
          <p>
            We are excited to announce the launch of our new donation campaign
            aimed at supporting those in need. Your generous donations will go
            towards improving the lives of individuals and communities facing
            hardship and adversity.
          </p>
        </div>
        <div className="donation-flex">
          <div className="flex-donation">
            <img src="/images/Rectangle 20.png" />
            <div className="numm">
              <h3>School materials, School fees</h3>
              <div className="little2">
                <img src="/images/Frame 87.png" />
              </div>

              <p>
                we believe that no child should be denied the right to learn
                because of their socioeconomic background.
              </p>
              <img src="/images/Frame 91 (1).png" className="donation-jj" />

              <button className="donation-btn">
                <p>Donate</p>
              </button>
            </div>
          </div>
          <div className="flex-donation">
            <img src="/images/Rectangle 20 (1).png" />
            <div className="numm">
              <h3>NECO/WASC Exam fees</h3>
              <div className="little">
                <img src="/images/Frame 87 (1).png" />
              </div>

              <p>
                we believe that no child should be denied the right to learn
                because of their socioeconomic background.
              </p>
              <img src="/images/Frame 91 (1).png" className="donation-jj" />
              <button className="donation-btn ">
                <p>Donate</p>
              </button>
            </div>
          </div>
          <div className="flex-donation">
            <img src="/images/Rectangle 20 (2).png" />
            <div className="numm">
              <h3>One-Year Sanitary Pad</h3>
              <div className="little3">
                <img src="/images/Frame 87 (2).png" />
              </div>

              <p>
                we believe that no child should be denied the right to learn
                because of their socioeconomic background.
              </p>
              <img src="/images/Frame 91 (1).png" className="donation-jj" />
              <button className="donation-btn">
                <p>Donate</p>
              </button>
            </div>
          </div>
          <div className="flex-donation">
            <img src="/images/Rectangle 20 (3).png" />
            <div className="numm">
              <h3>One-Year Lunch Feeding Program</h3>
              <div className="little3">
                <img src="/images/Frame 87 (3).png" />
              </div>

              <p>
                we believe that no child should be denied the right to learn
                because of their socioeconomic background.
              </p>
              <img src="/images/Frame 91 (1).png" className="donation-jj" />
              <button className="donation-btn">
                <p>Donate</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="services-area">
        <div>
          <h2>Our Service Programs</h2>
          <p>
            You can help make a difference in the lives of OVCs by getting
            involved with Edu-Kids Foundation. We welcome volunteers, donations,
            and partnerships with like-minded organizations. Together, we can
            support OVCs in achieving their full potential.
          </p>
        </div>
        <div className="imagess">
          <div className="image-12">
            <img src="/images/Frame 25.png" className="image-1" />
            <img src="/images/Frame 29.png" className="image-1" />
          </div>
          <div className="image-11">
            <img src="/images/Frame 28.png" className="image-1" />
            <img src="/images/Frame 30.png" className="image-1" />
          </div>
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
        <Link to="/form?source=home">
          <button className="donate-btn">
            <img src="/images/Frame 40.png" />
          </button>
        </Link>
      </div>
      {/* <div>
        <img src="/images/Edu-Kids.png" alt="" />
        <h3>
          We believe that every child deserves access to education and a safe
          and nurturing environment.
        </h3>
        <img src="/images/Misc_01.png" className="star-design" />
        <img src="/images/Highlight_05.png" className="design01" />
      </div>
      <div className="image-area1">
        <img src="/images/map-base.png" className="map" />
        <div className="image-area">
          <div>
            {" "}
            <img src="/images/Group 4.png" className="area1" />
          </div>
          <div>
            {" "}
            <img src="/images/Group 3.png" className="area2" />
          </div>
        </div>
      </div> */}
    </div>
  );
}
