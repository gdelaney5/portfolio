import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, Image } from './styles';


const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>

      <div class="ProjectTitle">
        <ProjectTitle>homie</ProjectTitle>
        <ul>
          <a href="https://quiet-falls-65825.herokuapp.com/">homie URL 'Click to Visit'</a>
        </ul>
        <ul>
          <a href="https://github.com/namnguyen21/homie">Github Repository 'Click to Visit'</a>
        </ul>
        <div>
          <Image src={ require("./assets/images/homie.png") } alt="homie"/>
        </div>
      </div>

      <div class="ProjectTitle">
        <ProjectTitle>RecoMovie</ProjectTitle>
        <ul>
          <a href="https://jacobntran.github.io/Project-1/index.html">RecoMovie URL 'Click to Visit'</a>
        </ul>
        <ul>
          <a href="https://github.com/jacobntran/Project-1.git">Github Repository 'Click to Visit'</a>
        </ul>
        <div>
          <Image src={ require("./assets/images/RecoMovie.png") } alt="RecoMovie"/>
        </div>
      </div>
    </Layout>
  );
};



export default Projects;