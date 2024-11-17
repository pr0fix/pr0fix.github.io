import { Carousel } from "@mantine/carousel";
import { Paper, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
    description: "A framework",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
    description: "The simulation of human intelligence in machines.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg",
    title: "Java",
    description: "A framework for building mobile apps using React.",
  },
];

const Projects: React.FC = () => {
    const items = data.map((item) => (
        <Text>{item.title}</Text>
        
    ))
  return (
    <Paper shadow="md" p="xl" radius="md">
      <Carousel slideSize="70%" slideGap="md" loop withIndicators>
        {items}
      </Carousel>
    </Paper>
  );
};

export default Projects;
