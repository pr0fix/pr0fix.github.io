import React from "react";
import classes from "./Studies.module.css";
import {
  Container,
  Text,
  ThemeIcon,
  SimpleGrid,
  Image,
  Tooltip,
} from "@mantine/core";

type StudyItem = {
  image: string;
  title: string;
  description: string;
};

const data: StudyItem[] = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    description: "A superset of JavaScript that adds static types.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    image:
      "https://img.icons8.com/?size=100&id=mgwdEllRedYT&format=png&color=000000",
    title: "Artificial Intelligence",
    description: "The simulation of human intelligence in machines.",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React Native",
    description: "A framework for building mobile apps using React.",
  },
];

const Studies: React.FC = () => {
  const items = data.map((item) => (
    <Tooltip label={item.description} position="top" withArrow>
      <div className={classes.studyItem} key={item.image}>
        <ThemeIcon
          gradient={{ from: "#8b45d2", to: "#3995d0" }}
          variant="gradient"
          className={classes.studyItemIcon}
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
    <Container size={700}>
      <SimpleGrid
        cols={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}
        spacing={50}
        mt={30}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};

export default Studies;
