import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import HeroSection from "./components/Header/HeroSection";

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  defaultRadius: "md",
});

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <HeroSection />
    </MantineProvider>
  );
};

export default App;
