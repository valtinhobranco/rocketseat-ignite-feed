type Colors = {
  colors: {
    black: string;
    white: string;

    gray100: string;
    gray300: string;
    gray400: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;

    green300: string;
    green500: string;

    red500: string;
  };
  textSizes: {
    titleXl: string;
    titleL: string;
    titleM: string;
    titleS: string;
    titleXs: string;
    textXl: string;
    textL: string;
    textM: string;
    textS: string;
    textXs: string;
  };
  fonts: {
    primaryFont: string;
    secondaryFont: string;
  };
  transitions: string;
  borderRadios: string;
};

export default <Colors>{
  colors: {
    black: "#000",
    white: "#fff",

    gray100: "#e1e1e6",
    gray300: "#c4c4cc",
    gray400: "#8d8d99",
    gray600: "#323238",
    gray700: "#29292e",
    gray800: "#202024",
    gray900: "#121214",

    green300: "#00b37e",
    green500: "#00875f",

    red500: "#f75a68",
  },
  textSizes: {
    titleXl: "3rem",
    titleL: "2rem",
    titleM: "1.5rem",
    titleS: "1.2rem",
    titleXs: "1.125rem",
    textXl: "3rem",
    textL: "2rem",
    textM: "1.5rem",
    textS: "1.2rem",
    textXs: "1.125rem",
  },

  fonts: {
    primaryFont: "'Roboto', sans-serif",
    secondaryFont: "'Roboto'",
  },

  transitions: ".1s",
  borderRadios: "8px",
};
