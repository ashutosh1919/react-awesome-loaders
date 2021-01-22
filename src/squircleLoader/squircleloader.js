import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Anchor, Cylinder } from "zdog";
import { useMediaQuery } from "react-responsive";

const StyledDiv = styled.div`
  width: ${(props) => props.sizeDiv}px;
  heigt: ${(props) => props.sizeDiv}px;
`;

function radiansToDegrees(_val) {
  return _val * (Math.PI / 180);
}

function blendEases(startEase, endEase, blender) {
  var parse = function (ease) {
      return typeof ease === "function" ? ease : gsap.parseEase("power4.inOut");
    },
    s = gsap.parseEase(startEase),
    e = gsap.parseEase(endEase),
    blender = parse(blender);
  return function (v) {
    var b = blender(v);
    return s(v) * (1 - b) + e(v) * b;
  };
}

const SquircleLoader = ({
  className = `squircleloader`,
  color = `#EF4444`,
  backfaceColor = `#4F46E5`,
  alternateColor = `#10B981`,
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
  let sizeDiv = (sizePassed * 200) / 64;

  useEffect(() => {
    let line1 = "expo.in",
      line2 = "circ",
      ease = blendEases(line1, line2);

    let rotateEase = ease; //blendEases('circ.in','expo')
    let colorCount = 0;
    let svg = document.querySelector(".zdog-svg-squircle-loader");

    let scene = new Anchor({
      translate: { x: 400, y: 300 },
      scale: 2,
    });

    let cylinder = new Cylinder({
      addTo: scene,
      diameter: 200,
      length: 200,
      stroke: false,
      color: color, //"#058ED9",
      backface: backfaceColor, //"#4059AD",
    });

    function animate() {
      scene.updateGraph();
      render();
    }

    function render() {
      //empty( svg );
      scene.renderGraphSvg(svg);
    }

    function empty(element) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
    function changeColor() {
      gsap.to(cylinder, {
        color:
          cylinder.color === color
            ? backfaceColor
            : cylinder.color === backfaceColor
            ? alternateColor
            : color,
      });
      //colorCount++;
    }

    var tl = gsap.timeline({ repeat: -1, onUpdate: animate });
    tl.to(
      cylinder.rotate,
      {
        //duration: 1,
        y: `+=${radiansToDegrees(90)}`,
        ease: ease,
      },
      "+=0.5"
    )

      .to(
        cylinder.rotate,
        {
          //duration: 1,
          y: `+=${radiansToDegrees(90)}`,
          ease: ease,
        },
        "+=0.5"
      )
      .call(changeColor);

    console.log(cylinder);
  });
  return (
    <StyledDiv className={className} sizeDiv={sizeDiv}>
      <svg className="zdog-svg-squircle-loader" viewBox="0 0 800 600"></svg>
    </StyledDiv>
  );
};

export default SquircleLoader;
