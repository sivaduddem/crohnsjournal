import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import ScrollToTopButton from "./topbutton/Top";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark, changeTheme}}>
        <Header />

        <div
          className="banner"
          style={{
            background: `url("/calvin-n-hobbes.jpg") no-repeat center center/cover`,
            height: "300px",
            width: "100%",
            marginBottom: "40px"
          }}
        ></div>

        <Greeting />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default Main;
