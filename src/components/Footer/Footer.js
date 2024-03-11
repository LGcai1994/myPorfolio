import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>

      <LinkList>
        <LinkColumn>
          <LinkTitle>EMail</LinkTitle>
          <LinkItem href='mailto:cailigang1994@outlook.com'>cailigang1994@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          Innovating one project at a time
          </Slogan>
        </CompanyContainer>
        <CompanyContainer>
          <SocialIcons href='https://github.com/'>
            <AiFillGithub></AiFillGithub>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/'>
            <AiFillLinkedin></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href='https://instagram.com/'>
            <AiFillInstagram></AiFillInstagram>
          </SocialIcons>
        </CompanyContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
