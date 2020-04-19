import React from "react";
import sushi from "../images/sushi.jpg";
import mango from "../images/mango.jpg";
import vegetables from "../images/vegetables.jpg";

export const homeCarouselItems = [
  {
    src: sushi,
    altText: "Sushi",
    caption: "We all need to eat food"
  },
  {
    src: mango,
    altText: "SMango",
    caption: "Most of us eat fruit"
  },
  {
    src: vegetables,
    altText: "Vegetables",
    caption: "Some of us eat vegetables"
  }
];

export const HOME = "HOME";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.dark);