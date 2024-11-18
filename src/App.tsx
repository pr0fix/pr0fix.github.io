import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { motion } from "motion/react";
import HeroSection from "./components/Hero/HeroSection";
import Learning from "./components/Learning/Learning";

const App = () => {
  return (
    <MantineProvider>
      <div className="sections" style={{ background: "#0b0d10" }}>
        <motion.section
          className="section"
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.section>

        <motion.section className="section">
          <Learning />
        </motion.section>
      </div>
    </MantineProvider>
  );
};

export default App;
