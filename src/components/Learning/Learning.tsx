import React from "react";
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Image,
  Text,
  Box,
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
      "Completed a Python Programming course by University of Helsinki.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg",
    title: "Java",
    description:
      "Created full-stack applications with Spring Boot and Thymeleaf.",
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

const LearningCard: React.FC<DataItem> = ({ image, title, description }) => {
  return (
    <Card padding="lg" radius="md" className={classes.card}>
      <Card.Section>
        <Box className={classes.image}>
          <Image src={image} alt={title} width={60} height={60} />
        </Box>
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>

      <Text size="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
};

const LearningSection: React.FC<{ title: string; data: DataItem[] }> = ({
  title,
  data,
}) => {
  return (
    <Box mb={50}>
      <Title order={2} mb={20} c="white">
        {title}
      </Title>
      <SimpleGrid cols={{ xl: 4, lg: 4, md: 2, sm: 1, xs: 1 }} spacing="lg">
        {data.map((item, index) => (
          <LearningCard key={index} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const Learning = () => {
  return (
    <Container fluid>
      <LearningSection title="I'm familiar with:" data={skillsData} />
      <LearningSection title="I'm currently learning:" data={studiesData} />
    </Container>
  );
};

export default Learning;
