import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  colors: {
    brand: {
      50: "#90C2E7",
      100: "#FBF9EE",
      200: "#F5DA8A",
      300: "#F78154",
      400: "#2DB88E",
    },
  },
  fonts: {
    heading: `'Grandstander Variable', sans-serif`,
    body: `'Chelsea Market', sans-serif`,    
  }
});

export default theme;
