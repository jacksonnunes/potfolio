import React from 'react';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

import { Container } from './styles';

const SocialMediaWrapper: React.FC = () => (
  <Container>
    <div>
      <AiFillFacebook />
    </div>

    <div>
      <AiFillGithub />
    </div>

    <div>
      <AiFillInstagram />
    </div>

    <div>
      <AiFillLinkedin />
    </div>
  </Container>
);

export default SocialMediaWrapper;
