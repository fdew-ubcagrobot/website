import React from "react";
import {
  RECRUITMENT_INFO_PARAGRAPH,
  APPLICATION_LINK,
  APPLICATION_LINK_TEXT,
} from "../../constant/recruitment";

function RecruitmentS1() {
  return (
    <div className="mt-12 mx-auto text-center max-w-[500px]">
      <p>{RECRUITMENT_INFO_PARAGRAPH}</p>
      <p>
        <a target="_blank" href={APPLICATION_LINK} className="text-lime-600 underline">
          {APPLICATION_LINK_TEXT}
        </a>{" "}
      </p>
    </div>
  );
}

export default RecruitmentS1;
