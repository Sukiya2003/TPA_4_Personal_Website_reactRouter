import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Portofolio</span>
      </h1>
      <Grid>
        <Card
          img={require("../images/ss1.png")}
          title="CARKUS (Cari Kampus) - Skilvul"
          description="CARKUS menyediakan informasi seputar kampus di Indonesia dan menyediakan forum terbuka untuk pemuda berdiskusi seputar kampus."
          technologies="Javascript - API - HTML - CSS"
          link_three="https://carkus.netlify.app/"
          link_three_text="Netlify"
        />
        <Card
          img={require("../images/ss2.png")}
          title="MADb (Movie App Database) - Skilvul"
          description="Website aplikasi movie yang mengambil data dari TMDb API. Dan akan menampilkan informasi movie."
          technologies="Javascript - Bootstrap - HTML - CSS"
          link_three="https://tpa3-movie-app.netlify.app/"
          link_three_text="Netlify"
        />
        <Card
          img={require("../images/ss3.png")}
          title="Kalkulator BMI - Skilvul"
          description="Website aplikasi menghitung Body Mass Index (BMI) dengan ketentuan kategori BMI yang telah ditetapkan."
          technologies="Javascript - HTML - CSS"
          link_three="https://tpa2-bmi-calculator.netlify.app/"
          link_three_text="Netlify"
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

export default Projects;
