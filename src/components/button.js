import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { motion } from "framer-motion";

const Wrapper = styled(motion.button)`
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
      <Wrapper
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {props.textButton}
      </Wrapper>
    </Link>
  );
};

export default Button;
