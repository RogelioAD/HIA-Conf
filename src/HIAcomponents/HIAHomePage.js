import React from "react";
import { Link } from "react-router-dom";
import videoSrc from "../images/MessagesApk-2025-01-11-11-15-15-4.mp4";

function HIAHomePage() {
  function Button() {
    console.log("Button was clicked!");
  }

  return (
    <div>
      {/* header */}
      <div className="headerbackground">
        <div className="header">
          <video className="videocontainer" autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Text and Image */}
      <div className="section2bg">
        {/* section2 container */}
        <div className="section2container">
          {/* Text - Left Half */}
          <div className="headertext thinfont">
            {/* 1st quarter */}
            <div className="headertext1">
              <div className="ht1div">
                Join us for an incredible week encountering God’s presence. This
                Event is ticketed to enter and registration is required. You
                Only pay a one time fee for the whole week!
              </div>
            </div>
            {/* 2nd quarter */}
            <div className="headertext2">
              <div className="buttonblack">
                <Link
                  to="/"
                  onClick={() => {
                    Button();
                  }}
                  className="nodecoration"
                >
                  REGISTER
                </Link>
              </div>
            </div>
            {/* 3rd quarter */}
            <div className="headertext3"></div>
            {/* 4th quarter */}
            <div className="headertext4">
              <div className="ht4div1 regularfont">LOW COST INITIATIVE</div>
              <div className="ht4div2">
                At Here I am Conference, we've implemented a low-cost initiative
                to ensure that everyone, regardless of their financial
                situation, can participate and experience the transformative
                power of Jesus. We understand that many young people may face
                financial barriers that prevent them from attending events like
                ours. Therefore, we have taken deliberate steps to keep our
                conference affordable without compromising on quality or impact.
              </div>
            </div>
          </div>

          {/* Image - Right Half */}
          <div className="headerimage">
            {/* 1st quarter */}
            <div className="headerimage1">
              <div className="hi1divbutton">
                <div className="buttonblack">
                  <Link
                    to="/"
                    onClick={() => {
                      Button();
                    }}
                    className="nodecoration"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            {/* 2nd quarter */}
            <div className="headerimage2">
              <div className="hi2faq">
                <div>What time does the conference start? </div>
                <div>Will you live stream?</div>
                <div>Can I pay at the door?</div>
                <div>Is there a group discount?</div>
              </div>
            </div>
            {/* 3rd quarter */}
            <div className="headerimage3">
              <div className="hi3div1 regularfont">OUR WHY</div>
              <div className="hi3div2">
                At Here I am Conference, we've implemented a low-cost initiative
                to ensure that everyone, regardless of their financial
                situation, can participate and experience the transformative
                power of Jesus. We understand that many young people may face
                financial barriers that prevent them from attending events like
                ours. Therefore, we have taken deliberate steps to keep our
                conference affordable without compromising on quality or impact.
              </div>
            </div>
            {/* 4th quarter */}
            <div className="headerimage4"></div>
          </div>
        </div>
      </div>

      {/* date time location */}
      <div className="datediv regularfont">
        <div>DATES AND TIMES HERE</div>
      </div>

      {/* Guest Speakers */}
      <div className="regularfontguest">
        <div className="speakerdivodd">
          <div className="trapezoid1"></div>
          <div className="speakername">GUEST SPEAKER 1</div>
        </div>

        <div className="speakerdiveven">
          <div className="trapezoid2"></div>
          <div className="speakername">GUEST SPEAKER 2</div>
        </div>

        <div className="speakerdivodd">
          <div className="trapezoid1"></div>
          <div className="speakername">GUEST SPEAKER 3</div>
        </div>
      </div>

      {/* next section*/}
      <div></div>
    </div>
  );
}

export default HIAHomePage;
