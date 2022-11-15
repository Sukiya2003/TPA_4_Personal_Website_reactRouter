import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <h1>
        <span className="title">Tentang</span>
      </h1>
      <Text>
        <p>
          Saya <strong>Sukiya</strong> Rizkiyani lahir di Medan
          pada 06 Juli 2003. Saya merupakan mahasiswa aktif S-1 Ilmu Komputer
          yang tertarik pada pewarnaan, perancangan UI/UX, desain digital dan
          website, mengedit foto dan video serta memiliki motivasi diri yang
          baik untuk bekerja dalam tim maupun individu. Selain itu, saya senang
          mengeksplorasi diri dengan aktif berorganisasi dan mengikuti kegiatan
          diluar kampus. Saat ini saya sedang dalam masa pembelajaran front-end
          development.
        </p>
        <p>
          <a
            class="shadow-underline"
            href={process.env.PUBLIC_URL + "https://sites.google.com/view/profilsuki/beranda"}
            target="_blank"
          >
            Lihat CV Saya
          </a>
        </p>
      </Text>
    </Container>
  );
};

const Container = styled.div`
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

const Text = styled.div`
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 40rem) {
    font-size: 1.2rem;
    padding: 1.5rem;
    font-weight: 500;
  }

  p {
    padding-bottom: 1rem;
    text-align: justify;
    @media (max-width: 40rem) {
      padding-bottom: 0.8rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
    //color: ${(props) => props.theme.headerUnderline};
  }
  .shadow-underline {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
    transition: box-shadow 0.3s ease;
  }
  .shadow-underline:hover,
  .shadow-underline:active {
    box-shadow: inset 0 -1.25em 0 ${(props) => props.theme.headerUnderline};
  }
`;

export default About;
