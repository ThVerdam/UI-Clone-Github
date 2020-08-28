import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Breadcrumb, 
  RepoIcon, 
  Stats, 
  StarIcon, 
  ForkIcon, 
  LinkButton, 
  GithubIcon,
 } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/ThVerdam'}>
          thverdam
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/ThVerdam/MarquinDJ'}>
          MarquinDJ
        </Link>
      </Breadcrumb>

      <p>Um bot útil e engraçado</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>9</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="http://github.com/thverdam/marquindj">
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;