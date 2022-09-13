import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.button`
  background-color: #f10c35;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1em;
  letter-spacing: 0.5px;
  color: white;
  text-transform: uppercase;
  padding: 15px 25px;
  margin: 20px 0px;
  border-radius: 30px;
  text-decoration: none;
  border: 0px;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <Link to={props.url}>
      <Wrapper>{props.textButton}</Wrapper>
    </Link>
  );
};

export default Button;
