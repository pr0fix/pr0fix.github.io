import React from "react";
import "@mantine/carousel/styles.css";
import classes from "./Projects.module.css";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Container, Text } from "@mantine/core";
import { motion } from "motion/react";

type ProjectItem = {
  title: string;
  description: string;
  screenshots: string[];
  link: string;
};

const projectData: ProjectItem[] = [
  {
    title: "CoffeeCompanion",
    description:
      "React Native mobile app where users can find, review and add coffee shops to favorites.",
    screenshots: [
      "../screenshots/CoffeeCompanion/homepage.png",
      "../screenshots/CoffeeCompanion/bottomsheet.png",
      "../screenshots/CoffeeCompanion/profile_page.png",
      "../screenshots/CoffeeCompanion/edit_profile.png",
      "../screenshots/CoffeeCompanion/sign_up.png",
    ],
    link: "https://github.com/pr0fix/CoffeeCompanion",
  },
];

const CoffeeCompanion: React.FC = () => {
  return (
    <Container className={classes.container}>
      <Text className={classes.title}>CoffeeCompanion</Text>
      <motion.div className={classes.mockupContainer}>
        <div className={classes.leftButtonFirst}></div>
        <div className={classes.leftButtonSecond}></div>
        <div className={classes.rightButton}></div>
        <div className={classes.screen}>
          <Carousel withControls>
            {projectData.map((project, index) =>
              project.screenshots.map((screenshot) => (
                <CarouselSlide key={index}>
                  <img src={screenshot} alt="asd" />
                </CarouselSlide>
              ))
            )}
          </Carousel>
        </div>
      </motion.div>
    </Container>
  );
};

export default CoffeeCompanion;