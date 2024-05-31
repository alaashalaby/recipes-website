import "@fontsource/handlee";
const styles = {
  global: {
    "::-webkit-scrollbar": {
      width: "13px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "primary.500",
      borderRadius: "0.3rem",
    },
    "::selection": {
      backgroundColor: "primary.500",
      color:"#fff"
    },
    span: {
      fontFamily: "'Handlee', cursive",
    },
  },
};

export default styles;
