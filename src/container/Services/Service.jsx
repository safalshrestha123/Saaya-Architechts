import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Service.scss";
import { urlFor, client } from "../../client";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/projects");
  };

  return (
    <>
      <div className="about-bg">
        <h2 className="head-text">
          Our <span>Services</span>
        </h2>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 2 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2
                className="bold-text"
                style={{ marginTop: 20 }}
                onClick={handleClick}
              >
                {about.title}{" "}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Service, "app__about"),
  "service",
  "app__whitebg"
);
