import React from "react";
import styled, { up, down, css, x } from "@xstyled/styled-components";
import { ScreenContainer } from "./ScreenContainer";

export const HeroTitle = styled.h1Box`
  font-size: 60;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -1.12px;
  margin: 0 0 2;
  @media (max-width: 768px) {
    font-size: 38;
  }
  ${up(
    "md",
    css`
      padding-top: 4;
      font-size: 48px;
    `
  )}
  ${up(
    "xl",
    css`
      font-size: 60;
    `
  )}
`;

export const HeroTeaser = styled.pBox`
  font-size: 18;
  margin: 3 0;
  ${up(
    "md",
    css`
      font-size: 20;
    `
  )}
  ${up(
    "xl",
    css`
      font-size: 24;
    `
  )}
`;

const InnerHero = styled(ScreenContainer)`
  background-repeat: no-repeat;
  background-position: top -5% center;
  background-size: 100% auto;
  padding-top: 65%;
  text-align: center;
  ${up(
    "md",
    css`
      padding-top: 0;
      margin-top: 5;
      background-position: center right;
      background-size: 58% auto;
      min-height: 400;
      text-align: left;
    `
  )}
  ${up(
    "xl",
    css`
      margin-top: 6;
    `
  )}
`;

export const HeroContainer = styled(ScreenContainer)`
  display: flex;
  flex-direction: row !important;
  padding-top: 5%;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column-reverse !important;
  }
`;

export const HeroHalfContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto 20px;
  padding: 3%;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 0;
    width: 100%;
  }
`;

export const Hero = React.forwardRef(
  ({ backgroundImageURL, ...props }, ref) => {
    return (
      //   <InnerHero
      //     ref={ref}
      //     backgroundImage={`url(${backgroundImageURL})`}
      //     {...props}
      //   />
      <HeroContainer ref={ref} {...props} />
    );
  }
);

export const HeroBody = React.forwardRef((props, ref) => {
  return <x.div ref={ref} w={{ md: 0.5 }} {...props} />;
});

export const HeroSection = styled.sectionBox`
  overflow: hidden;
  padding-top: 2;
  padding-bottom: 5;
`;

export const HeroActionList = React.forwardRef((props, ref) => {
  return (
    <x.div
      ref={ref}
      row
      m={-2}
      justifyContent={{ xs: "center", md: "initial" }}
      {...props}
    />
  );
});

export const HeroAction = React.forwardRef((props, ref) => {
  return <x.div ref={ref} col="auto" p={2} {...props} />;
});
