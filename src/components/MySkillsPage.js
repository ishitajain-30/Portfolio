import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { CLoud, Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import Navigation from "./Navigation";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 37vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <Main>
          <Title>
            <Develope width={40} height={40} /> Full Stack Developer
          </Title>
          <Description>
            Love to build dynamic and scalable web applications using modern
            front-end and back-end technologies.
          </Description>

          <Description>
            <strong>Technologies</strong>
            <p>
              Html, Css, Js, React, Redux, Typescript,Node, Express, Tailwind,
              MongoDB, MySQL, PHP, Postman, etc.
            </p>
          </Description>
        </Main>

        <Main>
          <Title>
            <CLoud width={40} height={40} /> Devops Engineer
          </Title>
          <Description>
            Believe in automating deployment pipelines, managing infrastructure
            with IaC, and ensuring seamless CI/CD processes
          </Description>

          <Description>
            <strong>Services</strong>
            <p>AWS, Docker, Jenkins, Kubernetes,GCP, Shell Scripting, etc.</p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
        <Navigation />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
