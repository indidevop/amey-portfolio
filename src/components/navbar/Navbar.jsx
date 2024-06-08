import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn,faInstagram,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <div className="social">
          <motion.a href="#" whileHover={{scale:1.1}} whileTap={{scale:1}} style={{marginTop: "5px"}}>
          <a href="https://drive.google.com/file/d/1qTGeBmQv3LBA1ZaRSEhN8gZqX_3ZJfpz/view?usp=sharing" target="_blank">Resume</a>
          </motion.a>
          <motion.a href="#" whileHover={{scale:1.1}} whileTap={{scale:1}}>
          <a href="mailto:ameykishor@gmail.com" target="_blank"><FontAwesomeIcon className="icons" icon={faEnvelope} /></a>
          </motion.a>
          <motion.a href="#" whileHover={{scale:1.1}} whileTap={{scale:1}}>
          <a href="https://www.linkedin.com/in/amey-sawalkar-640935209/" target="_blank"><FontAwesomeIcon className="icons" icon={faLinkedinIn} /></a>
          </motion.a>
          <motion.a href="#" whileHover={{scale:1.1}} whileTap={{scale:1}}>
          <a href="https://www.instagram.com/amey.ks/#" target="_blank"><FontAwesomeIcon className="icons" icon={faInstagram} /></a>
          </motion.a>
          <motion.a href="#" whileHover={{scale:1.1}} whileTap={{scale:1}}>
          <a href="https://github.com/indidevop" target="_blank"><FontAwesomeIcon className="icons" icon={faGithub} /></a>
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
