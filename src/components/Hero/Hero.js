import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcom To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of me is to be a web developer and find a remote job
        Introduce to myself
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>

  </Section>
);

export default Hero;