import { Container, Text } from "@mantine/core";
import classes from "./HeroSection.module.css";
import React from "react";
import Studies from "../Studies/Studies";
import Skills from "../Skills/Skills";

const HeroSection: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <h1 className={classes.header}>
          I'm Jani, <br />
          <Text
            component="span"
            variant="gradient"
            gradient={{ from: "purple", to: "blue", deg: 130 }}
            inherit
          >
            A Student & <br />
            Full-Stack Developer
          </Text>
        </h1>
      </Container>
    </div>
  );
};

export default HeroSection;
