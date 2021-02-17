import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <>
        <AiFillGithub />
        <AiFillLinkedin />
        <AiOutlineMail />
        <AiOutlineInstagram />
        <AiOutlineTwitter />
      </>
    </footer>
  );
};

export default Footer;
