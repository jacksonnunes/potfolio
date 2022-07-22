import React from 'react';
import SocialMediaWrapper from '../../components/SocialMediaWrapper';

import { Container, Content, ImageContent, TextAnimation } from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <h1>Jackson Queiroz</h1>

      <div>
        Desenvolvedor
        <TextAnimation>
          <div>
            <p>web</p>
            <p>backend</p>
            <p>mobile</p>
          </div>
        </TextAnimation>
      </div>
    </Content>

    <SocialMediaWrapper />

    <ImageContent />
  </Container>
);

export default Home;
