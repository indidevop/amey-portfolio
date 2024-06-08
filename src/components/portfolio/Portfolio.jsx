import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Food Delivery App Homepage",
    img: "/p1.png",
    desc: "Technlogy used for creating this homepage - ReactJS, Tailwind CSS, Figma",
    link: "https://lovely-conkies-30f2ba.netlify.app/",
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    img: "/p2.png",
    desc: "This dashboard visualises data in the form of line graphs and doughnut charts. Technology used - ReactJS, Tailwind, chart.js",
    link:"https://visualization-dashboard-frontend.onrender.com/",
  },
  {
    id: 3,
    title: "CleverBooks",
    img: "/p3.png",
    desc: "A stunning homepage for an AI website created using React hooks and TailwindCSS classes, making extensive use of gradients, transitions, and animations. Completely responsive.",
    link:"https://cleverbookspk.netlify.app/"
  },
  {
    id: 4,
    title: "To Do App",
    img: "/p4.png",
    desc: "A todo app which supports all the CRUD operations. Data is stored on the MongoDB Atlas cloud database. Technology used - ReactJS, Bootstrap, NodeJS, MongoDB",
    link:"https://notebook-frontend-c339.onrender.com"
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link} target="_blank">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Portfolio;
