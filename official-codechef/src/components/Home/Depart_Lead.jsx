import React from 'react'
import styles from "../../styles/Depart.module.css";
import Image from 'next/image';
import MngtImg from "../../../public/assets/Mngt.png";
import Team_img from "../../../public/assets/team.png";
import Members from "../../members/TeamMemebers.jsx";


    const teamMembers = [
      {
        name: "John Doe",
        stack: "Frontend Developer",
        info: "lorem ipsum",
        img: "Team_member_img"
      },
      {
        name: "Arya",
        stack: "Backend Developer",
        info: "lorem ipsum",
        img: "https://example.com/jane-doe.jpg"
      },
      {
        name: "Arya",
        stack: "Backend Developer",
        info: "lorem ipsum",
        img: "https://example.com/jane-doe.jpg"
      },
      {
        name: "Arya",
        stack: "Designer",
        info: "For the CSS, you can modify it as per your design requirements. padding, and margin of the grid containers and child elements.",
        img: "https://example.com/bob-smith.jpg"
      }
    ];

const Depart_Lead = () => {
  return (
    <>
     <Members leader_name = "Arya" leader_info="she is more than awesome" leader_tech_stack="DSA" leader_img_location="Team_member_img" members={teamMembers} />

    <div className={styles.department}>
        <p className={styles.heading}>Our Department</p>
        <div className={styles.main}>
            <div className={styles.card}>
            <Image
            className={styles.img}
            src={MngtImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <p className={styles.sub_heading}>MANAGEMENT</p>
            </div>

            <div className={styles.card}>
            <Image
            className={styles.img}
            src={MngtImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <p className={styles.sub_heading}>TECH</p>
            </div>

            <div className={styles.card}>
            <Image
            className={styles.img}
            src={MngtImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <p className={styles.sub_heading}>GRAPHICS</p>
            </div>

            <div className={styles.card}>
            <Image
            className={styles.img}
            src={MngtImg}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <p className={styles.sub_heading}>CONTENT</p>
            </div>
        </div>
    </div>

    {/* Leadership Team */}
    <div className={styles.leadership}>
     <p className={styles.heading}>Our Leadership Team</p>
     
        <div className={styles.bg}>
          
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={Team_img}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Hitansh Gupta</p>
                <p className={styles.designation}>President</p>
            </div>
                </div>
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={Team_img}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Hitansh Gupta</p>
                <p className={styles.designation}>President</p>
            </div>
                </div>
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={Team_img}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Hitansh Gupta</p>
                <p className={styles.designation}>President</p>
            </div>
                </div>
                <div className={styles.incontent}>
                <Image
            className={styles.img2}
            src={Team_img}
            alt="Picture of the author"
            width={160}
            height={160}
            />
            <div className={styles.text}>
                <p className={styles.name}>Hitansh Gupta</p>
                <p className={styles.designation}>President</p>
            </div>
                </div>
          
        </div>
     </div>
    
    </>
    )
}

export default Depart_Lead