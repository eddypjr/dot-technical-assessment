import {
  CopyrightContainer,
  FooterSection,
  Container,
  Content,
  SocialLogoContainer,
} from './footer.styles';
import { FC } from 'react';
import blackLogo from '../../../assets/images/blackLogo.png';
import Instagram from '../../../assets/svg/Instagram.svg';
import Twitter from '../../../assets/svg/Twitter.svg';
import Youtube from '../../../assets/svg/Youtube.svg';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <Content>
            <Link to="/">
              <img src={blackLogo} alt="logo" />
            </Link>
            <CopyrightContainer>
              <div>&#169; 2023 dot.cards text task.</div>
              <div>All rights reserved</div>
            </CopyrightContainer>
            <SocialLogoContainer>
              <Link to="https://www.instagram.com/dot.cards/?hl=en">
                <img src={Instagram} alt="instagram-link" />
              </Link>
              <Link to="https://twitter.com/DotCardsUSA">
                <img src={Twitter} alt="twitter-link" />
              </Link>
              <Link to="https://www.youtube.com/@dotnetworking8220">
                <img src={Youtube} alt="youtube-link" />
              </Link>
            </SocialLogoContainer>
          </Content>
        </Container>
      </FooterSection>
    </>
  );
};

export default Footer;
