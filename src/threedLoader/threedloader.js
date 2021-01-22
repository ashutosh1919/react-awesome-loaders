import React, { useEffect } from "react";
import * as THREE from "three";
import $ from "jquery";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`;

const StyledCanvas = styled.canvas`
  width: ${props => props.sizeCanvas}px;
  height: ${props => props.sizeCanvas}px;
`;

const ThreeDLoader = ({
  className = `threedloader`,
  colorRing1 = `#4F46E5`,
  colorRing2 = `#4F46E5`,
  colorLight = `#FFFFFF`,
  colorAmbientLight = `#cdd9ed`,
  size = `64px`,
  desktopSize = ``,
  mobileSize = ``,
}) => {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  let sizeFound = 0.0;
    if(isDesktopOrLaptop){
        if(desktopSize!=='')
            sizeFound = parseFloat(desktopSize);
        else
            sizeFound = parseFloat(size)*2;
    }
    if(isTabletOrMobile){
        if(mobileSize!=='')
            sizeFound = parseFloat(mobileSize);
        else
            sizeFound = parseFloat(size);
    }

    let sizePassed = parseFloat(sizeFound);
    let sizeCanvas = (sizePassed * 240)/64;

  useEffect(() => {
    $(document).ready(function () {
      let $canvas = $(".threed-loader-canvas"),
        canvas = $canvas[0],
        renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          context: canvas.getContext("webgl2"),
          antialias: true,
          alpha: true,
        });

      renderer.setSize($canvas.width(), $canvas.height());
      renderer.setPixelRatio(window.devicePixelRatio || 1);

      renderer.shadowMap.enabled = true;

      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(
        45,
        $canvas.width() / $canvas.height(),
        0.1,
        1000
      );

      camera.position.z = 500;

      let material1 = new THREE.MeshPhongMaterial({
        color: colorRing1,
        shininess: 20,
      });

      let material2 = new THREE.MeshPhongMaterial({
        color: colorRing2,
        shininess: 20,
      });

      let shape = new THREE.TorusGeometry(60, 20, 60, 180);

      let circle1 = new THREE.Mesh(shape, material1),
        circle2 = new THREE.Mesh(shape, material2);

      circle1.castShadow = true;
      circle1.receiveShadow = true;
      circle2.castShadow = true;
      circle2.receiveShadow = true;

      scene.add(circle1);

      circle2.position.set(60, 0, 0);

      let circle2Pivot = new THREE.Object3D();

      circle2Pivot.castShadow = true;
      circle2Pivot.receiveShadow = true;

      circle2Pivot.add(circle2);

      scene.add(circle2Pivot);

      circle2Pivot.rotation.y -= Math.PI / 2;

      circle1.rotation.x -= Math.PI / 2;

      let lightFront = new THREE.PointLight(colorLight, 0.25);
      lightFront.position.set(0, 300, 300);
      lightFront.castShadow = true;
      scene.add(lightFront);

      let lightTop = new THREE.PointLight(colorLight, 0.4);
      lightTop.position.set(0, 0, 400);
      lightTop.castShadow = true;
      scene.add(lightTop);

      let lightBottom = new THREE.PointLight(colorLight, 0.1);
      lightBottom.position.set(0, -300, 0);
      lightBottom.castShadow = true;
      scene.add(lightBottom);

      scene.add(new THREE.AmbientLight(colorAmbientLight));

      let speed = 0.024;

      var render = function () {
        requestAnimationFrame(render);

        circle1.rotation.x -= speed;
        circle2Pivot.rotation.x -= speed;
        circle2Pivot.rotation.y += speed;

        renderer.render(scene, camera);
      };

      render();
    });
  });

  return (
    <Container className={className}>
      <StyledCanvas sizeCanvas={sizeCanvas} className="threed-loader-canvas"></StyledCanvas>
    </Container>
  );
};

export default ThreeDLoader;
