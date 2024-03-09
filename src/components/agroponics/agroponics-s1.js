import React from "react";
import { AgroPonicsTitleImg } from "../../assets/image";
import ProjectInstance from "../common/ProjectInstance";
function AgroPonicsS1() {

	const AgroPonicsText="Our newly launched project that aims to build a fully autonomous hydroponics system. We plan to create efficient and reliable systems that can be implemented throughout campus. A hydroponics system is an integrated system that grows crops, without soil. By cycling mineral nutrients dissolved in water, the system is able to produce food at any location, year-round, in a more sustainable way.";

	return (
		<ProjectInstance img={AgroPonicsTitleImg} text={AgroPonicsText} projectNum='2'>AgroPonics</ProjectInstance>
	);
};

export default AgroPonicsS1;