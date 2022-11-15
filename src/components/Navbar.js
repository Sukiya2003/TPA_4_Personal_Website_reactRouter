import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen, scroll, location }) => {
  const node = useRef(null);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    //console.log(node.current);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  return (
    <Parent ref={node} scroll={scroll} location={location}>
      <Nav>
        <Logo scroll={scroll} location={location} exact to="/">
          <h1 style={{color: "#EA1E5C"}}>SUKI-Poenya</h1>
        </Logo>
        <Menu isOpen={isOpen}>
          <MenuLink
            exact
            to="/"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Beranda
          </MenuLink>

          <MenuLink
            exact
            to="/projects"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Portofolio
          </MenuLink>
          <MenuLink
            exact
            to="/about"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Tentang
          </MenuLink>
          <MenuLink
            exact
            to="/blog"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Blog
          </MenuLink>
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.header`
  transition: background-color 0.5s, box-shadow 0.5s;
  .icon {
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    transition: color 0.5s;

    color: ${(props) =>
      props.scroll && props.location
        ? props.theme.sunMoon
        : props.theme.sunMoonScroll};
    &:hover {
      color: ${(props) => props.theme.sunMoonHover};
    }
    @media (max-width: 40rem) {
      right: 5rem;
    }
  }

  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${(props) =>
    props.onScroll && props.location
      ? props.theme.navbar
      : props.theme.navbarStart};
  overflow: visible;
  box-shadow: ${(props) =>
    props.onScroll && props.location
      ? "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)"
      : "0"};
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
  margin: auto;
`;

const MenuLink = styled(NavLink)`
  padding: 1.1rem 0rem;
  width: 6rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s;
  color: ${(props) =>
    props.scroll && props.path
      ? props.theme.menuLink
      : props.theme.menuLinkScroll};
  &.active {
    color: ${(props) => props.theme.menuLinkActive};
  }
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 40rem) {
    width: 100%;
  }

  @media (min-width: 40rem) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: ${(props) => props.theme.menuLinkUnderline};
      transform: scaleX(0%);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::before {
      transform-origin: 50% 0;
    }

    &:hover {
      &::before {
        transform: scaleX(100%);
        transform-origin: 50% 0;
      }
    }
  }

  &:nth-last-child(2) {
    @media (max-width: 66rem) {
      margin-right: 3.5rem;
    }

    @media (max-width: 40rem) {
      margin-right: auto;
      //box-sizing: content-box;
      border-bottom: solid 0.5rem ${(props) => props.theme.menuLinkActive};
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 40rem) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "11rem" : "0")};
    transition: max-height 0.2s ease-out;
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  fill: none;
  stroke: ${(props) =>
    props.scroll && props.location ? props.theme.logoScroll : props.theme.logo};
  transition: stroke 0.5s;
  stroke-width: 11.49392605;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
  margin-left: 1.5rem;
  &:hover,
  &:active {
    stroke: ${(props) => props.theme.menuLinkActive};
  }
  @media (max-width: 40rem) {
    margin-left: 1rem;
  }
  padding: 0.5rem;

    span {
      font-weight: 800;
      transition: color 0.5s;
      color: ${(props) =>
        props.scroll && props.location
          ? props.theme.logoSpanScroll
          : props.theme.logoSpan};
    }
  } */
`;

export default Navbar;
