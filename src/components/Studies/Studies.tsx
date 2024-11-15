import { Text, Container, ThemeIcon, SimpleGrid, Image } from "@mantine/core";
import classes from "./Studies.module.css";
import React from "react";

const data = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Artificial Intelligence",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React Native",
  },
];

const Studies: React.FC = () => {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
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
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <SimpleGrid cols={{ xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
};

export default Studies;
