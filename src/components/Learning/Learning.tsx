import React from "react";
import {
  Container,
  SimpleGrid,
  Text,
  ThemeIcon,
  Tooltip,
  Image,
} from "@mantine/core";
import classes from "./Learning.module.css";

type DataItem = {
  image: string;
  title: string;
  description: string;
};

const skillsData: DataItem[] = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
    description:
      "Developed web applications with React, including this portfolio.",
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
    description:
      "Completed a course on python programming and fiddled with machine learning using PyTorch",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg",
    title: "Java",
    description:
      "Created full-stack applications with Spring Boot and Thymeleaf",
  },
];

const studiesData: DataItem[] = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    description:
      "Learning to use TypeScript in projects to ensure better type safety.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "Integrating OpenAI models to Node.js Express applications.",
  },
  {
    image:
      "https://img.icons8.com/?size=100&id=mgwdEllRedYT&format=png&color=000000",
    title: "Artificial Intelligence",
    description: "Learning about integrating AI models into web applications.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React Native",
    description:
      "Currently building a coffee-themed full-stack mobile application.",
  },
];

const Learning: React.FC = () => {
  const renderItems = (data: any[]) => {
    return data.map((item, index) => (
      <Tooltip key={index} label={item.description} position="top" withArrow>
        <div className={classes.item}>
          <ThemeIcon
            gradient={{ from: "#8b45d2", to: "#3995d0" }}
            variant="gradient"
            className={classes.itemIcon}
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
  };

  return (
    <Container className={classes.container}>
      <div>
        <Text className={classes.title} c="white">
          I'm familiar with:
        </Text>
        <SimpleGrid cols={2} spacing={30} mt={20}>
          {renderItems(skillsData)}
        </SimpleGrid>
      </div>
      <div>
        <Text className={classes.title} c="white">
          I'm currently learning:
        </Text>
        <SimpleGrid
          cols={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
          spacing={30}
          mt={20}
        >
          {renderItems(studiesData)}
        </SimpleGrid>
      </div>
    </Container>
  );
};

export default Learning;
