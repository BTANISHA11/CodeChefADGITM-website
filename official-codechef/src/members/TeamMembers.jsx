import React from "react";
import styles from "../styles/Members.module.css";


const Leader = ({leader_member_name, leader_tech_stack, leader_info}) => {
  return (
    <div className={styles.Leader_info}>
      <div className={styles.leader_triangle}></div>
      <h3>{leader_member_name}</h3>
      <p>{leader_tech_stack}</p>
      <hr className={styles.line} />
      <p>{leader_info}</p>
    </div>
  );
};

const Member = ({team_member_name, tech_stack, team_info, img_location}) => {
  return (
    <div className={styles.info}>
      <div className={styles.triangle}></div>
      <h3>{team_member_name}</h3>
      <p>{tech_stack}</p>
      <hr className={styles.line} />
      <p className={styles.teamInfo}>{team_info}</p>
    </div>
  ); 
};

const Members = ({leader_name, leader_info, leader_tech_stack, leader_img_location, members}) => {
   return (
     <>
     <div className={styles.leader_grid}>
        <div className={styles.leader_information}>
        <img src={leader_img_location}/>
          <Leader
            leader_member_name={leader_name}
            leader_info={leader_info}
            leader_tech_stack={leader_tech_stack}
          />
        </div>
      </div>

      <div className={styles.grid}>
        {members.map((member, index) => (
          <div key={index} className={styles.member_information}>
            <img src={member.img} alt={member.name} />
            <Member
              team_member_name={member.name}
              tech_stack={member.stack}
              team_info={member.info}
              
            />
          </div>
        ))}
      </div>
     </>
   );
}
export default Members;
