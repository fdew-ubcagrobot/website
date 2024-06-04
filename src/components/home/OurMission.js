import LeafIcon from "../../assets/image/brown-leaf-icon.png"

function KeyCards() {
	return (
		<div className="text-[#873807] w-full h-full flex justify-center items-center flex-col">
			<img src={LeafIcon} className="w-[160px]" />
			<p className="text-[36px] text-center">agrobot helps reduce pesticide waste by 60%</p>
			<div className="flex w-[70%] mt-6">
				<span className="w-full h-[20px] mx-2 bg-[#873807] rounded-full" />
				<span className="w-full h-[20px] mx-2 bg-[#8738072a] rounded-full" />
				<span className="w-full h-[20px] mx-2 bg-[#8738072a] rounded-full" />
			</div>
		</div>
	);
}

function OurMission() {

	return (
		<div className="w-full h-[100vh] bg-[#77be2099] px-[10%] flex justify-center items-center">
			<div className="w-[50%]">
				<h1 className="mb-4 font-bold text-[48px] text-[#2E1B0F]">We want to make farming  greener</h1>
				<p className="text-[36px] text-[#2E1B0F]">Using our AgroBot technology dignissim leo ante, quis blandit orci laoreet ut. Suspendisse ornare id justo ac fringilla. Duis quis molestie risus, sed vulputate velit. Duis fringilla pharetra viverra. </p>
			</div>
			<div className="w-[40%] ml-[10%]">
				<KeyCards />
			</div>
		</div>
	);
}

export default OurMission;