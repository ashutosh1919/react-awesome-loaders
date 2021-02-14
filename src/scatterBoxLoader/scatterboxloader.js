import React from "react";
import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

const AnimBoxMove = (boxMoveParams) => keyframes`
${boxMoveParams[0]}% {
    transform: translate(var(--x), var(--y));
}
${boxMoveParams[1]}%, 52% {
    transform: translate(0, 0);
}
80% {
    transform: translate(0, -32px);
}
90%, 100% {
    transform: translate(0, 188px);
}
`;
const AnimBoxScale = (boxScaleParams) => keyframes`
${boxScaleParams[0]}% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
}
${boxScaleParams[1]}%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
}
`;
const AnimGround = keyframes`
0%, 65% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
}
75%, 90% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
}
100% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
}
`;
const AnimGroundShine = keyframes`
0%, 70% {
    opacity: 0;
}
75%, 87% {
    opacity: 0.2;
}
100% {
    opacity: 0;
}
`;

const AnimMask = keyframes`
0%, 65% {
    opacity: 0;
}
66%, 100% {
    opacity: 1;
}
`;

const Container = styled.div`
--background: ${props => props.background}; //#121621;
--duration: ${props => props.duration}s;
--primary: ${props => props.primaryColor}; //rgba(39, 94, 254, 1);
--primary-light: ${props => props.primary}; //#2f71ff;
--primary-rgba: ${props => props.primaryRGBA}00;//rgba(39, 94, 254, 0);
width: 200px;
height: 320px;
position: relative;
transform-style: preserve-3d;
@media (max-width: 480px) {
        zoom: 0.44;
}
:before , :after {
    --r: 20.5deg;
    content: '';
    width: 320px;
    height: 140px;
    position: absolute;
    right: 32%;
    bottom: -11px;
    background: var(--background);
    transform: translateZ(200px) rotate(var(--r));
    animation: ${AnimMask} var(--duration) linear forwards infinite;
}
:after {
    --r: -20.5deg;
    right: auto;
    left: 32%;
}
`;

const GroundDiv = styled.div`
transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
width: 200px;
height: 200px;
background: var(--primary);
background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
transform-style: preserve-3d;
animation: ${AnimGround} var(--duration) linear forwards infinite;
:before , :after {
    --rx: 90deg;
    --ry: 0deg;
    --x: 44px;
    --y: 162px;
    --z: -50px;
    content: '';
    width: 156px;
    height: 300px;
    opacity: 0;
    background: linear-gradient(var(--primary), var(--primary-rgba));
    position: absolute;
    transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
    animation: ${AnimGroundShine} var(--duration) linear forwards infinite;
}
:after {
    --rx: 90deg;
    --ry: 90deg;
    --x: 0;
    --y: 177px;
    --z: 150px;
}
`;

const Ground = styled.div`
position: absolute;
left: -50px;
bottom: -120px;
transform-style: preserve-3d;
transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
`;

const Box = styled.div`
--x: 0px;
--y: 0px;
position: absolute;
animation: var(--duration) linear forwards infinite;
transform: translate(var(--x), var(--y));
& > div {
    background-color: var(--primary);
    width: 48px;
    height: 48px;
    position: relative;
    transform-style: preserve-3d;
    animation: var(--duration) ease forwards infinite;
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
}
& > div:before , & > div:after {
    --rx: 90deg;
    --ry: 0deg;
    --z: 24px;
    --y: -24px;
    --x: 0;
    content: '';
    position: absolute;
    background-color: inherit;
    width: inherit;
    height: inherit;
    transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
    filter: brightness(var(--b, 1.2));
}
& > div:after {
    --rx: 0deg;
    --ry: 90deg;
    --x: 24px;
    --y: 0;
    --b: 1.4;
}
`;

const Box0 = styled(Box)`
--x: -220px;
--y: -120px;
left: 58px;
top: 108px;
animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box1 = styled(Box)`
--x: -260px;
--y: 120px;
left: 25px;
top: 120px;
animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box2 = styled(Box)`
--x: 120px;
--y: -190px;
left: 58px;
top: 64px;
animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box3 = styled(Box)`
--x: 280px;
--y: -40px;
left: 91px;
top: 120px;
animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box4 = styled(Box)`
--x: 60px;
--y: 200px;
left: 58px;
top: 132px;
animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box5 = styled(Box)`
--x: -220px;
--y: -120px;
left: 25px;
top: 76px;
animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box6 = styled(Box)`
--x: -260px;
    --y: 120px;
    left: 91px;
    top: 76px;
    animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;
const Box7 = styled(Box)`
--x: -240px;
    --y: 200px;
    left: 58px;
    top: 87px;
    animation-name: ${props => AnimBoxMove(props.boxMoveParams)};
& > div {
    animation-name: ${props => AnimBoxScale(props.boxScaleParams)};
}
`;

const ScatterBoxLoader = ({
  className = `scatterboxloader`,
  background = `#FFFFFF`,
  primaryColor = `#2f71ff`,
  duration = 5,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
    let primary = darken(0.15, primaryColor);
    let primaryRGBA = lighten(0.15, primaryColor);

    let boxMoveParams = [
        [12, 25],
        [16, 29],
        [20, 33],
        [24, 37],
        [28, 41],
        [32, 45],
        [36, 49],
        [40, 53]
    ]
    let boxScaleParams = [
        [6, 14],
        [10, 18],
        [14, 22],
        [18, 26],
        [22, 30],
        [26, 34],
        [30, 38],
        [34, 42]
    ]

  return (
    <Container duration={duration} background={background} primary={primary} primaryColor={primaryColor} primaryRGBA={primaryRGBA} className={className}>
      <Box0 boxMoveParams={boxMoveParams[0]} boxScaleParams={boxScaleParams[0]}>
        <div></div>
      </Box0>
      <Box1 boxMoveParams={boxMoveParams[1]} boxScaleParams={boxScaleParams[1]}>
        <div></div>
      </Box1>
      <Box2 boxMoveParams={boxMoveParams[2]} boxScaleParams={boxScaleParams[2]}>
        <div></div>
      </Box2>
      <Box3 boxMoveParams={boxMoveParams[3]} boxScaleParams={boxScaleParams[3]}>
        <div></div>
      </Box3>
      <Box4 boxMoveParams={boxMoveParams[4]} boxScaleParams={boxScaleParams[4]}>
        <div></div>
      </Box4>
      <Box5 boxMoveParams={boxMoveParams[5]} boxScaleParams={boxScaleParams[5]}>
        <div></div>
      </Box5>
      <Box6 boxMoveParams={boxMoveParams[6]} boxScaleParams={boxScaleParams[6]}>
        <div></div>
      </Box6>
      <Box7 boxMoveParams={boxMoveParams[0]} boxScaleParams={boxScaleParams[0]}>
        <div></div>
      </Box7>
      <Ground>
        <GroundDiv></GroundDiv>
      </Ground>
    </Container>
  );
};

export default ScatterBoxLoader;
