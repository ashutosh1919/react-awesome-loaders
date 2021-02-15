import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { gsap } from "gsap";

const StyledDiv = styled.div`
  width: ${(props) => props.sizeSVG}px;
  height: ${(props) => props.sizeSVG}px;
  background: ${(props) => props.background};
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
  visibility: hidden;
`;

const SunspotLoader = ({
  className = `sunspotloader`,
  background = `transparent`,
  gradientColors = ["#FF4F59", "#FFFC31"],
  shadowColor = `#5B1E00`,
  shadowOpacity = `0.05`,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
  let colorsToFill = [];
  if (gradientColors.constructor === String) {
    if (gradientColors === ``) {
      gradientColors = "#FF4F59";
    }
    colorsToFill.push(gradientColors);
  }
  if (gradientColors.constructor === Array) {
    let asize = gradientColors.length;
    if (asize === 0) {
      gradientColors.push("#FF4F59");
      asize = gradientColors.length;
    }
    for (let i = 0; i < 2; i += 1) {
      if (i < asize) colorsToFill.push(gradientColors[i]);
      else colorsToFill.push(gradientColors[asize - 1]);
    }
  }

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  let sizeFound = 0.0;
  if (isDesktopOrLaptop) {
    if (desktopSize !== "") sizeFound = parseFloat(desktopSize);
    else sizeFound = parseFloat(size) * 2;
  }

  if (isTabletOrMobile) {
    if (mobileSize !== "") sizeFound = parseFloat(mobileSize);
    else sizeFound = parseFloat(size);
  }

  let sizePassed = parseFloat(sizeFound);
  let sizeSVG = (sizePassed * 150) / 64;

  useEffect(() => {
    let select = (s) => document.querySelector(s),
      selectAll = (s) => document.querySelectorAll(s),
      mainSVG = select("#mainSVG"),
      container = select("#container"),
      seg = select(".seg"),
      allSegs = [];
    gsap.set("svg", {
      visibility: "visible",
    });
    let num = 360 / 15;
    let duration = 0.25;
    allSegs.push(seg);

    for (var i = 1; i < num - 8; i++) {
      let clone = seg.cloneNode(true);
      container.appendChild(clone);
      gsap.set(clone, {
        rotation: i * 15,
        svgOrigin: "400 300",
      });
      allSegs.push(clone);
    }
    let mainTl = gsap.timeline({});

    allSegs.forEach((item, count) => {
      let tl = gsap.timeline();
      tl.to(item, {
        rotation: "-=120",
        svgOrigin: "400 300",
        repeat: -1,
        repeatRefresh: true,
        ease: "sine.inOut",
        repeatDelay: (num - 10) * duration,
      });
      mainTl.add(tl, count * duration);
    });

    gsap.to(
      container,
      {
        duration: 1,
        rotation: 360,
        svgOrigin: "400 300",
        ease: "linear",
        repeat: -1,
      },
      0
    );

    gsap.globalTimeline.timeScale(0.5);
  }, []);

  return (
    <StyledDiv sizeSVG={sizeSVG} background={background} className={className}>
      <StyledSVG
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="335 235 150 150"
      >
        <defs>
          <g id="container" filter="url(#goo)">
            <path className="seg" d="M412.9,251.7c-4.1-1.1-8.5-1.7-12.9-1.7" />
          </g>
          <filter
            id="goo"
            colorInterpolationFilters="sRGB"
            filterUnits="objectBoundingBox"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
            <feBlend />
          </filter>
          <radialGradient
            id="grad"
            cx="400.5176"
            cy="298.0287"
            r="125.9247"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.39" style={{ stopColor: colorsToFill[0] }} />
            <stop offset="0.45" style={{ stopColor: colorsToFill[1] }} />
          </radialGradient>
        </defs>
        <g id="wrapper">
          <use
            x="20"
            y="20"
            xlinkHref="#container"
            fill="none"
            strokeWidth="20"
            strokeMiterlimit="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke={shadowColor}
            opacity={shadowOpacity}
          />
          <use
            xlinkHref="#container"
            fill="none"
            strokeWidth="20"
            strokeMiterlimit="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="url(#grad)"
          />
        </g>
      </StyledSVG>
    </StyledDiv>
  );
};

export default SunspotLoader;
