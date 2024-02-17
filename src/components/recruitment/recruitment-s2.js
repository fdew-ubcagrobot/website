import React from "react";
import {
  INFOCARD_1_TEXT,
  INFOCARD_2_TEXT,
  INFOCARD_3_TEXT,
  WHO_WE_ARE_TEXT,
} from "../../constant/recruitment";

const RecruitmentS2 = () => {
  return (
    <div className="mt-12 text-center mx-auto p-6">
      <div className="grid grid-cols-2 gap-4">
        <div class="col">
          <h1 className="text-[24px] text-[#3A3A3A] font-bold text-left md:ml-24 ml-12">
            Who we are
          </h1>
          <ExpandedInfoCard
            descriptionText={WHO_WE_ARE_TEXT}
          ></ExpandedInfoCard>
        </div>
        <div class="col">
          <h1 className="text-[24px] text-[#3A3A3A] font-bold text-left md:ml-24 ml-12">
            Who you are
          </h1>
          <InfoCard descriptionText={INFOCARD_1_TEXT}></InfoCard>
          <InfoCard descriptionText={INFOCARD_2_TEXT}></InfoCard>
          <InfoCard descriptionText={INFOCARD_3_TEXT}></InfoCard>
        </div>
      </div>
    </div>
  );
};

function InfoCard(props) {
  const { titleText, descriptionText } = props;
  return (
    <div className="rounded-lg mx-auto border border-black p-4 my-5 max-w-[500px] shadow-lg">
      <h2 className="text-xl font-bold mb-2">{titleText}</h2>
      <p>{descriptionText}</p>
    </div>
  );
}

function ExpandedInfoCard(props) {
  const { titleText, descriptionText, image } = props;
  return (
    <div className="rounded-lg mx-auto border bg-gray-600 p-4 my-5 max-w-[500px] shadow-lg">
      <h2 className="text-xl font-bold mb-2">{titleText}</h2>
      <p>{descriptionText}</p>
    </div>
    // TODO: Add image
  );
}

export default RecruitmentS2;
