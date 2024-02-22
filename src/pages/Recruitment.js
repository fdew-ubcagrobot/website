import React from "react";
import { TitleBanner, PortfolioS1, StatsBar } from "../components";
import { RecruitmentImage } from "../assets";
import NotificationBanner from "../components/common/NotificationBanner";
import {
  RECRUITMENT_STATUS_DESCRIPTION,
  RECRUITMENT_STATUS_TITLE,
} from "../constant/recruitment";
import RecruitmentS1 from "../components/recruitment/recruitment-s1";
import RecruitmentS2 from "../components/recruitment/recruitment-s2";
import RecruitmentS3 from "../components/recruitment/recruitment-s3";
import RecruitmentS4 from "../components/recruitment/recruitment-s4";

function Recruitment() {
  return (
    <div className="bg-[#F8F7F1] w-screen">
      <TitleBanner
        toColor="#5d3c3a"
        fromColor="#9da28d"
        imageSrc={RecruitmentImage}
        imageClassName="absolute right-0 bottom-0 w-4/12"
      >
        Recruitment
      </TitleBanner>
      <NotificationBanner
        titleText={RECRUITMENT_STATUS_TITLE}
        descriptionText={RECRUITMENT_STATUS_DESCRIPTION}
      ></NotificationBanner>

      <RecruitmentS1></RecruitmentS1>
      <RecruitmentS2></RecruitmentS2>
      <RecruitmentS3></RecruitmentS3>
      <RecruitmentS4></RecruitmentS4>
    </div>
  );
}

export default Recruitment;
