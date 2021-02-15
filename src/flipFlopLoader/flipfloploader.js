import React, { useEffect } from "react";
import * as THREE from "three";
import { gsap, Elastic } from "gsap";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
// import './flipfloploader.css';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCanvas = styled.canvas`
  display: block;
  width: ${(props) => props.sizeRing}px;
  height: ${(props) => props.sizeRing}px;
  transform: translateY(-1px);
`;

const StyledSpan = styled.span`
  display: block;
  font-family: "Roboto", Arial;
  font-size: ${(props) => props.sizeFont}px;
  font-weight: 900;
  color: ${(props) => props.textColor};
  letter-spacing: 4px;
`;

const StyledSpanFirst = styled(StyledSpan)`
  transform: translateX(calc(var(--x-f) * 1px));
`;

const StyledSpanLast = styled(StyledSpan)`
  transform: translateX(calc(var(--x-l) * -1px));
`;

const FlipFlopLoader = ({
  className = `flipfloploader`,
  textColor = `#4F46E5`,
  ringColor = `#4F46E5`,
  ringShiness = 20,
  ringOpacity = 0.96,
  ringTransparency = true,
  ringLightColor = `#FFFFFF`,
  ringLightIntensity = 0,
  ringAmbientLightColor = `#eef4ff`,
  textBeforeRing = `FL`,
  textAfterRing = `P...`,
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
  let sizeRing = (sizePassed * 40) / 64;
  let sizeFont = (sizePassed * 32) / 64;
  let sizeXf = (sizePassed * 8) / 64;
  let sizeXl = (sizePassed * 5) / 64;
  let sizeXfUpdate = (sizePassed * 14) / 64;
  let sizeXlUpdate = (sizePassed * 12) / 64;

  useEffect(() => {
    let canvas = document.querySelector(".flipflop-loader-canvas"),
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: canvas.getContext("webgl2"),
        antialias: true,
        alpha: true,
      });

    let Ring3D = (innerRadius, outerRadius, heigth, Segments) => {
      let extrudeSettings = {
          depth: heigth,
          bevelEnabled: false,
          curveSegments: Segments,
        },
        arcShape = new THREE.Shape();

      arcShape.moveTo(outerRadius, 0);
      arcShape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);

      let holePath = new THREE.Path();
      holePath.moveTo(innerRadius, 0);
      holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
      arcShape.holes.push(holePath);

      return new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
    };

    renderer.setSize(sizeRing, sizeRing);
    renderer.setPixelRatio(8);

    renderer.shadowMap.enabled = true;

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(45, 40 / 40, 0.1, 1000);

    camera.position.z = 89;

    let shape = Ring3D(12, 20, 9, 60);
    shape.translate(0, 0, -4.5);
    let material = new THREE.MeshPhongMaterial({
      color: ringColor, //0xe4ecfa,
      shininess: ringShiness, //20,
      opacity: ringOpacity, //0.96,
      transparent: ringTransparency, //true,
    });
    let object = new THREE.Mesh(shape, material);

    scene.add(object);

    let lightTop = new THREE.DirectionalLight(
      ringLightColor,
      ringLightIntensity
    );
    lightTop.position.set(0, 40, 80);
    lightTop.castShadow = true;
    scene.add(lightTop);

    let lightCenter = new THREE.DirectionalLight(
      ringLightColor,
      ringLightIntensity
    );
    lightCenter.position.set(0, 20, 0);
    lightCenter.castShadow = true;
    scene.add(lightCenter);

    let lightBottom = new THREE.DirectionalLight(
      ringLightColor,
      ringLightIntensity
    );
    lightBottom.position.set(0, -40, 80);
    lightBottom.castShadow = true;
    scene.add(lightBottom);

    scene.add(new THREE.AmbientLight(ringAmbientLightColor));

    var docElem = document.getElementsByClassName(className)[0],
      offset = {
        xf: sizeXf, //getComputedStyle(docElem).getPropertyValue("--x-f"),
        xl: sizeXl, //getComputedStyle(docElem).getPropertyValue("--x-l"),
      };
    console.log(docElem);

    new gsap.timeline({
      repeat: -1,
      yoyo: true,
      onUpdate: function () {
        docElem.style.setProperty("--x-f", offset.xf);
        docElem.style.setProperty("--x-l", offset.xl);
      },
      repeatDelay: 0.32,
    })
      .to(offset, 1.6, {
        ease: Elastic.easeInOut.config(1.2, 0.5),
        xf: sizeXfUpdate,
        xl: sizeXlUpdate,
      })
      .to(
        object.rotation,
        1.6,
        {
          ease: Elastic.easeInOut.config(1.2, 0.5),
          x: THREE.Math.degToRad(90),
          y: THREE.Math.degToRad(90),
        },
        0
      );

    var render = function () {
      requestAnimationFrame(render);

      renderer.render(scene, camera);
    };

    render();
  });

  return (
    <Container className={className}>
      <StyledSpanFirst sizeFont={sizeFont} textColor={textColor}>
        {textBeforeRing}
      </StyledSpanFirst>
      <StyledCanvas
        sizeRing={sizeRing}
        className="flipflop-loader-canvas"
      ></StyledCanvas>
      <StyledSpanLast sizeFont={sizeFont} textColor={textColor}>
        {textAfterRing}
      </StyledSpanLast>
    </Container>
  );
};

export default FlipFlopLoader;
