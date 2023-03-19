import React from "react";
import styles from "../../styles/PastEvents2.module.css";
import CodeBlooded3 from "../../../public/images/Events/CodeBlooded3.png"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";

const UpcomingEvents = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.heading}>
          <h1>Our Upcoming Events</h1>
        </div>
        {/* <div className={styles.BottomIcon}>
          <BsFillArrowLeftCircleFill color="#3A8CBB" size={30} />
          <BsFillArrowRightCircleFill color="#979797" size={30} />
        </div> */}
        <div className={styles.Container}>
          <div className={styles.Events}>
            <Image
              style={{ marginTop: "-8px" }}
              src={CodeBlooded3}
              width={380}
            />
            <div className={styles.belowCard}>Mon 16</div>
          </div>
          <div className={styles.Events}>
            <Image
              style={{ marginTop: "-8px" }}
              src={CodeBlooded3}
              width={380}
            />
            <div className={styles.belowCard}>Mon 16</div>
          </div>
          <div className={styles.RightContent}>
            {/* <div className={styles.TopDot}>
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#21658C" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
              <RxDotFilled color="#D9D9D9" size={30} />
            </div> */}
            <div className={styles.Text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </div>
            <div className={styles.BelowBorder}>--</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
