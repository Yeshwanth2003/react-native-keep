import { useState } from "react";
import {Keyboard} from "react-native";
import Header from "./Header";
import Body from "./Body";

export default function Combined() {
  let [navWidth, setNav] = useState("0%");

  function toogle_nav() {
    if (navWidth === "50%") setNav("0%");
    else setNav("50%");
    Keyboard.dismiss()
  }

  function off_toogle() {
    if (navWidth !== "0%") setNav("0%");
  }

  return (
    <>
      <Header toogle_nav={toogle_nav}></Header>
      <Body navWidth={navWidth} off_toogle={off_toogle}></Body>
    </>
  );
}
