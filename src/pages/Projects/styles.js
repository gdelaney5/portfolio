import styled from 'styled-components';
import { white } from '@carbon/colors';

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
  line-height: 18pt;
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
  line-height: 36pt;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
`

export const Image = styled.img`
  max-width: 500px;
  object-fit: scale-down;
  margin-right: 1rem;
  border-radius: 2px;
`;