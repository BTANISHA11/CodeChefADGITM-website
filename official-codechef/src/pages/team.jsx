import React from "react";
import { Inter } from "next/font/google";
import Depart_Lead from "@/components/Home/Depart_Lead.jsx";
import Members from "../members/TeamMembers";

const inter = Inter({ subsets: ["latin"] });
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

const ManagementPage = () => {
  return(
  <>
  <Members leader_name = "Arya" leader_info="she is more than awesome" leader_tech_stack="DSA" leader_img_location="Team_member_img" members={teamMembers} />
</>
)
};

export default ManagementPage;
