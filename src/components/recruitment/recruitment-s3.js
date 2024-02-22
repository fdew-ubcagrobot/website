import React from "react";
import {
  timelineData
} from "../../constant/recruitment";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

const RecruitmentS3 = () => {
  return (
    <div className="mt-12 text-center mx-auto p-6">
      <div class="col">
        <h1 className="text-4xl mb-[2%] text-[#3A3A3A] text-left md:ml-24 ml-12">
          Recruitment Timeline
        </h1>
        <RecruitmentTimeline></RecruitmentTimeline>
      </div>
    </div>
  );
};



function RecruitmentTimeline() {
  return (
    <Timeline className="md:mx-12" position="alternate">
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
      {timelineData.map((timelineItem) => (
        
          <TimelineItem>
            <TimelineOppositeContent>
            <h6 className="mt-2 font-bold text-green-500">
                    {timelineItem.date}
                  </h6>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot className="p-0">
                <div className="h-6 w-6 bg-green-500 rounded-full"></div>
              </TimelineDot>
              <TimelineConnector />
              
            </TimelineSeparator>
            <div className="h-[130px]"></div>
            <TimelineContent>
            <div className="rounded p-5 shadow-lg">
                  <h6 className="text-lg text-green-500">
                    {timelineItem.title}
                  </h6>
                  <p>{timelineItem.description}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
      ))}
      <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default RecruitmentS3;
