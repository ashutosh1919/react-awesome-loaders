import React from "react";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { darken } from "polished";

const AnimBox = (animParams) => keyframes`
0%{
    transform: translate(${animParams.start[0]}%, ${animParams.end[0]}%);
}
50% {
    transform: translate(${animParams.start[1]}%, ${animParams.end[1]}%);
}
100% {
    transform: translate(${animParams.start[2]}%, ${animParams.end[2]}%);
}
`;

const Container = styled.div`
  --size: ${(props) => props.sizeBoxes}px;
  --duration: 800ms;
  height: calc(var(--size) * 2);
  width: calc(var(--size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-bottom: ${(props) => props.sizeMarginBottom}px;
  // margin-top: calc(var(--size) * 1.5 * -1);
  padding: 70px;
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
`;

const StyledBox = styled.div`
  --size: ${(props) => props.sizeBoxes}px;
  --duration: 800ms;
  width: var(--size);
  height: var(--size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
  transform: translate(
    ${(props) => props.boxTransforms[0]}%,
    ${(props) => props.boxTransforms[1]}%
  );
  animation: ${(props) => AnimBox(props.animParams)} var(--duration) linear
    infinite;

  & > div {
    --background: ${(props) => props.colors.main};
    --top: auto;
    --right: auto;
    --bottom: auto;
    --left: auto;
    --translateZ: calc(var(--size) / 2);
    --rotateY: 0deg;
    --rotateX: 0deg;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    top: var(--top);
    right: var(--right);
    bottom: var(--bottom);
    left: var(--left);
    transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
      translateZ(var(--translateZ));
  }

  & > div:nth-child(1) {
    --top: 0;
    --left: 0;
  }
  & > div:nth-child(2) {
    --background: ${(props) => props.colors.right};
    --right: 0;
    --rotateY: 90deg;
  }
  & > div:nth-child(3) {
    --background: ${(props) => props.colors.left};
    --rotateX: -90deg;
  }
  & > div:nth-child(4) {
    --background: ${(props) => props.colors.shadow};
    --top: 0;
    --left: 0;
    --translateZ: calc(var(--size) * 3 * -1);
  }
`;

const StyledBoxDiv = styled.div`
  --background: ${(props) => props.boxDivParams.background};
  --top: ${(props) => props.boxDivParams.top};
  --right: ${(props) => props.boxDivParams.right};
  --bottom: ${(props) => props.boxDivParams.bottom};
  --left: ${(props) => props.boxDivParams.left};
  --translateZ: ${(props) => props.boxDivParams.translateZ};
  --rotateY: ${(props) => props.boxDivParams.rotateX};
  --rotateX: ${(props) => props.boxDivParams.rotateY};
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);
  transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
    translateZ(var(--translateZ));
`;

const BoxesLoader = ({
  className = `boxesloader`,
  boxColor = `#5C8DF6`,
  shadowColor = `#dbe3f4`,
  duration = 800,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
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
  let sizeBoxes = (sizePassed * 32) / 64;
  let sizeMarginBottom = (sizePassed * 50) / 64;

  const boxRightColor = darken(0.15, boxColor);
  const boxLeftColor = darken(0.05, boxColor);

  const colors = {
    main: boxColor,
    right: boxRightColor,
    left: boxLeftColor,
    shadow: shadowColor,
  };

  let animParams = [
    {
      start: [100, 100, 200],
      end: [0, 0, 0],
    },
    {
      start: [0, 0, 100],
      end: [100, 0, 0],
    },
    {
      start: [100, 100, 0],
      end: [100, 100, 100],
    },
    {
      start: [200, 200, 100],
      end: [0, 100, 100],
    },
  ];
  let boxTransforms = [
    [100, 0],
    [0, 100],
    [100, 100],
    [200, 0],
  ];

  let boxDivParams = [
    {
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "0",
      background: boxColor,
      rotateX: "0deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "auto",
      right: "0",
      bottom: "auto",
      left: "auto",
      background: boxRightColor,
      rotateX: "0deg",
      rotateY: "90deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",
      background: boxLeftColor,
      rotateX: "-90deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) / 2)",
    },
    {
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "0",
      background: shadowColor,
      rotateX: "0deg",
      rotateY: "0deg",
      translateZ: "calc(var(--size) * 3 * -1)",
    },
  ];

  return (
    <Container
      sizeMarginBottom={sizeMarginBottom}
      duration={duration}
      sizeBoxes={sizeBoxes}
      className={className}
    >
      <StyledBox
        duration={duration}
        colors={colors}
        sizeBoxes={sizeBoxes}
        animParams={animParams[0]}
        boxTransforms={boxTransforms[0]}
      >
        <StyledBoxDiv boxDivParams={boxDivParams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[3]}></StyledBoxDiv>
      </StyledBox>
      <StyledBox
        duration={duration}
        colors={colors}
        sizeBoxes={sizeBoxes}
        animParams={animParams[1]}
        boxTransforms={boxTransforms[1]}
      >
        <StyledBoxDiv boxDivParams={boxDivParams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[3]}></StyledBoxDiv>
      </StyledBox>
      <StyledBox
        duration={duration}
        colors={colors}
        sizeBoxes={sizeBoxes}
        animParams={animParams[2]}
        boxTransforms={boxTransforms[2]}
      >
        <StyledBoxDiv boxDivParams={boxDivParams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[3]}></StyledBoxDiv>
      </StyledBox>
      <StyledBox
        duration={duration}
        colors={colors}
        sizeBoxes={sizeBoxes}
        animParams={animParams[3]}
        boxTransforms={boxTransforms[3]}
      >
        <StyledBoxDiv boxDivParams={boxDivParams[0]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[1]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[2]}></StyledBoxDiv>
        <StyledBoxDiv boxDivParams={boxDivParams[3]}></StyledBoxDiv>
      </StyledBox>
    </Container>
  );
};

export default BoxesLoader;
