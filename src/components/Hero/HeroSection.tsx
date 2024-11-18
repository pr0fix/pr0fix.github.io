import { Container, Text, Stack } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import classes from "./HeroSection.module.css";
import React from "react";
import Links from "../Links/Links";

const HeroSection: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Stack>
          <div className={classes.content}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={classes.header}
            >
              I'm Jani,
              <br />
              <TypeAnimation
                sequence={[
                  "A Student",
                  2000,
                  "A Full-Stack Developer",
                  2000,
                  "A Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </motion.h1>

            <Text className={classes.description} mt="xl">
              Passionate about building modern web applications and exploring
              new technologies. Currently focused on full-stack development and
              AI integration.
            </Text>
          </div>

          <div>
            <Links />
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default HeroSection;
