import React from "react";
import styled from "styled-components";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Container = styled.div`
  height: calc(100vh - 7rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Introduction>
        <ProfileCard>
          <div className="profile-text">
            <div className="hi">Hey hey! Ini Personal Website</div>
            <h1>Sukiya Rizkiyani</h1>
            <h2>Front-End Developer | UI/UX Designer</h2>
          </div>
        </ProfileCard>
        <div className="short">
          <br />
          <br />
          <h3>Infinite Mindset for Infinite Game.</h3>
        </div>

        <Social>
          <div className="iconcontainer">
            <a
              className="same"
              href="https://github.com/Sukiya2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="1.5rem" className="icon" />
              <span className="icontext">Github</span>
            </a>
          </div>
          <div className="iconcontainer">
            <a
              target="blank"
              href="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;to=sukiyarizkiyani2003@gmail.com"
              className="same"
            >
              <FaEnvelope size="1.5rem" className="icon" />
              <span className="icontext">Email</span>
            </a>
          </div>
        </Social>
      </Introduction>
    </Container>
  );
};

const ProfileCard = styled.div`
  height: 8rem;
  display: flex;
  transition: color 0.5s;
  color: ${(props) => props.theme.textStart};

  @media (max-width: 40rem) {
    max-width: 20rem;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0;
    margin: 0;
  }

  .hi {
    font-size: 2.2rem;
    letter-spacing: -0.1rem;

    @media (max-width: 40rem) {
      padding-top: 1rem;
      font-size: 1.9rem;
      text-align: center;
      letter-spacing: -0.086rem;
    }
  }

  h1 {
    transition: color 0.5s;
    color: ${(props) => props.theme.menuLinkActive};
    font-weight: 700;
    margin: 0;
    font-size: 4.4rem;
    letter-spacing: -0.2rem;

    @media (max-width: 40rem) {
      letter-spacing: -0.17rem;
      font-size: 3.8rem;
    }

    @media (max-width: 20rem) {
      letter-spacing: -0.17rem;
      font-size: 3.6rem;
    }
  }

  .profile-text {
    padding: 0 1rem;
    @media (max-width: 40rem) {
      padding: 0;
    }
  }
`;

const Introduction = styled.div`
  max-width: 34rem;
  transition: color 0.5s;
  color: ${(props) => props.theme.textStart};

  .short {
    padding: 1rem;
    letter-spacing: -0.02rem;
    font-size: 1.2rem;
    font-weight: 400;
    box-sizing: border-box;

    @media (max-width: 40rem) {
      padding: 1rem;
      font-size: 1.2rem;
      text-align: center;
      letter-spacing: 0rem;
      max-width: 20rem;
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    @media (max-width: 40rem) {
      font-size: 0;
    }
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

const Social = styled.div`
  a {
    transition: color 0.5s;
    color: ${(props) => props.theme.socialStart};
    &:hover {
      color: ${(props) => props.theme.socialStartHover};
    }
    &:focus {
      color: ${(props) => props.theme.socialStartHover};
    }
  }

  @media (max-width: 40rem) {
    max-width: 20rem;
  }

  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 40rem) {
    gap: 0.5rem;
  }

  gap: 1.5rem;
`;

export default Home;
