import { Container, Text } from "@mantine/core";
import classes from "./HeroSection.module.css";
import React from "react";
import Studies from "../Studies/Studies";

const HeroSection: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Container size={800} className={classes.inner}>
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

        <Text className={classes.description} c="dimmed">
          I'm proficient in:
        </Text>
        {/* <Skills/> */}

        <Text className={classes.description} c="dimmed">
          I'm currently studying:
        </Text>

        <Studies />
      </Container>
    </div>
  );
};

export default HeroSection;
