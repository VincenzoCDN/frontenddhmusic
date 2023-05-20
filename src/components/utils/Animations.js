import { StyleSheet } from "aphrodite";
import {
  bounce,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
  pulse,
  tada,
} from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "2s",
  },
  fadeInLeft: {
    animationName: fadeInLeft,
    animationDuration: "2s",
  },
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: "2s",
  },
  pulse: {
    animationName: pulse,
    animationDuration: "2.0s",
    animationIterationCount: "infinite",
  },

  tada: {
    animationName: tada,
    animationDuration: "3.5s",
    animationIterationCount: "infinite",
  },
});

export default styles;
