import React from "react";
import classes from "./Skills.module.css";
import {
  Text,
  ThemeIcon,
  SimpleGrid,
  Image,
  Tooltip,
  Container,
} from "@mantine/core";

type SkillItem = {
  image: string;
  title: string;
  description: string;
};

const data: SkillItem[] = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
    description: "Developed web applications with React, including this portfolio.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "Built RESTful and GraphQL APIs using Node.js and Express.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
    description: "Completed a course on python programming and fiddled with machine learning using PyTorch",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg",
    title: "Java",
    description: "Created full-stack applications with Spring Boot and Thymeleaf",
  },
];

const Skills: React.FC = () => {
  const items = data.map((item) => (
    <Tooltip label={item.description} position="top" withArrow>
      <div className={classes.skillItem} key={item.image}>
        <ThemeIcon
          gradient={{ from: "#8b45d2", to: "#3995d0" }}
          variant="gradient"
          className={classes.skillItemIcon}
          size={60}
          radius="md"
        >
          <Image src={item.image} alt={item.title} />
        </ThemeIcon>
        <div className={classes.titleContainer}>
          <Text fw={700} fz="lg">
            {item.title}
          </Text>
        </div>
      </div>
    </Tooltip>
  ));

  return (
    <Container>
      <Text className={classes.title} c="white">
        I'm familiar with:
      </Text>

      <SimpleGrid
        cols={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
        spacing={30}
        mt={20}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};

export default Skills;
