import React from "react";
import styles from "../../styles/MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Container}>
        <div><a href="#about">About</a></div>
        <div>Departments</div>
        <div>Our Team</div>
        <div>Past Events</div>
        <div>Upcoming Events</div>
        <div><a href="#contact-us">Contact Us</a></div>
      </div>
    </div>
  );
};

export default MenuBar;
