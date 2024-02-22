import React from "react";
import {
  INFOCARD_1_TEXT,
  INFOCARD_2_TEXT,
  INFOCARD_3_TEXT,
  WHO_WE_ARE_TEXT,
  LEARN_MORE_LINK,
  LEARN_MORE_LINK_TEXT,
} from "../../constant/recruitment";
import { TeamDiscussion } from "../../assets";
import { HiOutlineAcademicCap } from "react-icons/hi";

const RecruitmentS4 = () => {
  // TODO: Constantize text, add icons
  return (
    <div className="text-center mx-auto p-6 flex flex-wrap justify-center">
      <h1 className="text-2xl mb-[2%] text-[#3A3A3A] text-center">
        Follow us on social media for the latest updates:{" "}
        <a
          className="text-lime-500 underline"
          href="https://www.instagram.com/ubcagrobots"
          target="blank"
        >
          Instagram
        </a>{" "}
        <a
          className="text-lime-500 underline"
          href="https://www.linkedin.com/company/ubc-agrobot"
          target="blank"
        >
          LinkedIn
        </a>
      </h1>
    </div>
  );
};
export default RecruitmentS4;
