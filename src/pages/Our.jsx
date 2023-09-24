import React from "react";
import { Link } from "react-router-dom";
export default function Our() {
  return (
    <div className="our-session">
      <div className="our-top">
        <img src="/images/Frame 40 (1).png" />

        <Link to="/form?source=our">
          <button className="button--donate">
            <img src="/images/Frame 3 (1).png" />
          </button>
        </Link>
        {/* <h2>Our Service Programs</h2>
        <p>
          You can help make a difference in the lives of OVCs by getting
          involved with Edu-Kids Foundation. We welcome volunteers, donations,
          and partnerships with like-minded organizations. Together, we can
          support OVCs in achieving their full potential.
        </p>
        <img src="/images/Frame 3.png" className="our-download" /> */}
      </div>
      <div className="imagess2">
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
  );
}
