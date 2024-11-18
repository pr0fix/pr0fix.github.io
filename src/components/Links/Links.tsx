import React from "react";
import classes from "./Links.module.css";
import { motion } from "motion/react";

interface LinkProps {
  children: string;
  href: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const Links: React.FC = () => {
  return (
    <section className={classes.section}>
      <AnimatedLink href="https://linkedin.com/in/jani-hänninen-66909319b">
        LinkedIn
      </AnimatedLink>
      <AnimatedLink href="https://github.com/pr0fix">GitHub</AnimatedLink>
      <AnimatedLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Press Me!
      </AnimatedLink>
    </section>
  );
};

const AnimatedLink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <motion.a
      className={classes.contactLink}
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                initial: { y: 0 },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      <div className={classes.flippedLink}>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
};

export default Links;
