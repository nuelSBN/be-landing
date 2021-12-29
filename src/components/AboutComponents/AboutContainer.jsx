import React from "react";
import "../cssFiles/about.css";

export default function AboutContainer() {
  return (
    <div className="aboutContainer">
      <div className="aboutUs" id="aboutUs">
        <div className="aboutUsImage">
          <img
            src="https://images.pexels.com/photos/9957550/pexels-photo-9957550.jpeg?cs=srgb&dl=pexels-jnrjose-9957550.jpg&fm=jpg"
            alt="model"
          />
        </div>
        <div className="aboutUsText">
          <div className="topTitle">
            <h4>About Buildeasy</h4>
          </div>
          <div className="topText">
            <div className="topTextContainer">
              <h2>What We do?</h2>
              <p>
                Buildeasy is a fast growing ecommerce company that deals mainly
                in the building materials, using our geolocation services
                nationwide, we will be able to get our products faster to our
                supplier, we have a standby team that do routine checks on all
                our stores to make sure our customers are getting the value of
                their money.
              </p>
              <p>
                We also run a background check on all our drivers to ensure
                security, availabilty and efficiency.
              </p>
            </div>
            <div className="bottomTextContainer">
              <h4>Our other services includes</h4>
              <p>
                We also assist in giving out loans to help customersbuild thier
                home faster, for more information about this click{" "}
                <a href="#">here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomAbout" id="services">
        <div className="bottomAboutCard">
          <div className="botomAboutIcons">
            <i class="fas fa-hard-hat"></i>
          </div>
          <div className="botomAboutTexts">
            <h4>Best products guaranteed</h4>
            <p>
              Only high quality and durable material are allowed on our
              platform. You get what you see, no fake products.
            </p>
          </div>
        </div>
        <div className="bottomAboutCard">
          <div className="botomAboutIcons">
            <i class="fas fa-bus"></i>
          </div>
          <div className="botomAboutTexts">
            <h4>Fast and efficient delivery</h4>
            <p>
              With the latest technology, including the tracking device, you
              will get fast and efficient delivery to your site and also know
              where you goods are in real time.
            </p>
          </div>
        </div>
        <div className="bottomAboutCard">
          <div className="botomAboutIcons">
            <i class="fas fa-headset"></i>
          </div>
          <div className="botomAboutTexts">
            <h4>StandBy constumer care support</h4>
            <p>
              We have a standby qualified customer care support system that are
              available 24/7 to assist our customers whenever there's any issue
              or need more information on our product
            </p>
          </div>
        </div>
        <div className="bottomAboutCard">
          <div className="botomAboutIcons">
            <i class="fas fa-pencil-alt"></i>
          </div>
          <div className="botomAboutTexts">
            <h4>Latest update</h4>
            <p>
              We constantly update our customers daily on our latest deals and
              promos, so that they won't miss out on any of them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
