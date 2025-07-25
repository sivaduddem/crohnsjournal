import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              {greeting.disclaimer && (
                <p
                  className={
                    isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
                  }
                  style={{ fontWeight: "bold", marginTop: "1rem" }}
                >
                  {greeting.disclaimer}
                </p>
              )}
              <SocialMedia />
              <div className="button-greeting-div">
                <a href="/contact.html">
                  <Button text="Contact me" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
