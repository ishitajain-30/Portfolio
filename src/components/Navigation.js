import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: fixed;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: fixed;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      {/* Email */}
      <Contact target="_blank" href="mailto:ishitajain382@gmail.com">
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Say hi..
        </motion.h2>
      </Contact>

      {/* Blog */}
      <BLOG to="/blog">
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Projects
        </motion.h2>
      </BLOG>

      {/* Work */}
      <WORK to="/work" click={+click}>
        <motion.h2
          initial={{
            y: -200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            y: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Work
        </motion.h2>
      </WORK>

      <BottomBar>
        {/* About */}
        <ABOUT to="/about" click={+click}>
          <motion.h2
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About.
          </motion.h2>
        </ABOUT>

        {/* Skill */}
        <SKILLS to="/skills">
          <motion.h2
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            My Skills.
          </motion.h2>
        </SKILLS>
      </BottomBar>
    </>
  );
};

export default Navigation;
