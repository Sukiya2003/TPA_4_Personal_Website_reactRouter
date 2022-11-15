import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = ({ location }) => {
  return (
    <Container>
      <Copyright location={location}>
        <p>© 2022 TPA-4. All right reserved</p>
      </Copyright>
      <Social location={location}>
        <a
          className="social"
          href="https://github.com/Sukiya2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="1.5rem" />
        </a>
        <a
          className="social"
          target="blank"
          href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;to=sukiyarizkiyani2003@gmail.com"
        >
          <FaEnvelope size="1.5rem" />
        </a>
      </Social>
    </Container>
  );
};

const Container = styled.footer`
  box-sizing: border-box;
  height: 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 0.5rem;
  padding: 0 3rem;
  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
`;

const Copyright = styled.div`
  opacity: 0.5;
  color: ${(props) =>
    props.location ? props.theme.footer : props.theme.footerStart};
`;

const Social = styled.div`
  a {
    opacity: 0.5;
    color: ${(props) =>
      props.location ? props.theme.footer : props.theme.footerStart};
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
`;

export default Footer;
