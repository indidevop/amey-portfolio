import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
         <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            My <motion.b whileHover={{ color: "orange" }}>Skills</motion.b>
          </h1>
        </div>
      </motion.div>

       <motion.div className="textContainer" variants={variants}>
       <hr />
        <p>
          Get resposive web apps 
          <br /> developed & fixed
        </p>
        <hr />
      </motion.div>

    
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ scale:1.1 }}
        >
          <img src="/html.png" alt="" />
          <p>HTML 5</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale:1.1 }}
        >
          <img src="/javascript.png" alt="" />
          <p>Javascript</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale:1.1 }}
        >
          <img src="/react.png" alt="" />
          <p>ReactJS</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale:1.1 }}
        >
          <img src="/tailwind.png" alt="" />
          <p>Tailwind</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale:1.1 }}
        >
          <img src="/bootstrap.png" alt="" />
          <p>Bootstrap</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ scale:1.1 }}
        >
          <img src="/redux.png" alt="" />
          <p>Redux</p>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
