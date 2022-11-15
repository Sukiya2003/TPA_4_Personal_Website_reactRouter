import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Blog = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Blog - Favorite Suki</span>
      </h1>
      <Grid>
        <Card
          img={require("../images/fav1.jpg")}
          title="Buku: Five Little Pigs - Agatha Christie"
        />
        <Card
          img={require("../images/fav4.jpg")}
          title="Buku: The Zom-B Chronicles - Darren Shan"
        />
        <Card
          img={require("../images/mia.jpg")}
          title="Mia and Me Series"
        />
      </Grid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }

  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, 17rem);
  grid-auto-rows: 24rem;
  grid-gap: 2.5rem;
  justify-content: center;
`;

export default Blog;
