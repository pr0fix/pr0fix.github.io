import "@mantine/core/styles.css";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import { motion } from "motion/react";
import HeroSection from "./components/Header/HeroSection";
import Skills from "./components/Skills/Skills";
import Studies from "./components/Studies/Studies";

const App = () => {
  return (
    <MantineProvider>
      <div
        className="sections"
        style={{ background: "linear-gradient(135deg, #2ECC71, #16A085)" }}
      >
        <motion.section
          className="section"
          initial={{ opacity: 0, x: -350, y: -350 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.section>

        <motion.section className="section">
          <div
            style={{
              display: "flex",
              gap: "50px",
              justifyContent: "center",
              alignItems: "center",

              height: "100%",
            }}
          >
            <div>
              <Skills />
            </div>
            <div>
              <Studies />
            </div>
          </div>
        </motion.section>
      </div>
    </MantineProvider>
  );
};

export default App;
