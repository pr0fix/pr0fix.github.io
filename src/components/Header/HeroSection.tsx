import { Container, Text } from "@mantine/core";
import classes from "./HeroSection.module.css";
import React from "react";
import Studies from "../Studies/Studies";
import Skills from "../Skills/Skills";

const HeroSection: React.FC = () => {
  return (
    <div>
      <Container size={800}>
        <h1 className={classes.title}>
          I'm Jani, <br />
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "purple", to: "blue" }}
            inherit
          >
            A Student & <br />
            Full-Stack Developer
          </Text>{" "}
        </h1>
        <div className={classes.languagesContainer}>
          <Text className={classes.description} c="dimmed">
            I'm familiar with:
          </Text>
          <Skills />

          <Text className={classes.description} c="dimmed">
            I'm currently learning:
          </Text>

          <Studies />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
