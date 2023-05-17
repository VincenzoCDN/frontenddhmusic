import { StyleSheet } from "aphrodite";
import { bounce, fadeInRight } from "react-animations";

const styles = StyleSheet.create({
  bounce: {
    animationName: bounce,
    animationDuration: "1s",
  },
  fadeInRight: {
    animationName: fadeInRight,
    animationDuration: "1s",
  },
});

export default styles;
