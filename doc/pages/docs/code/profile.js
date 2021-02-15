import React from "react";
import styled from "@xstyled/styled-components";

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 30px;
`;

const StyledImg = styled.img`
  height: 250px;
  width: auto;
  border-radius: 50%;
  background: #e8f2fc;
  border: 1px solid #6066fa;
`;

export const Profile = ({ profileUrl, ...props }) => {
  return (
    <StyledDiv>
      <StyledImg src={profileUrl} />
    </StyledDiv>
  );
};
