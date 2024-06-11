import LeafIcon from "../../assets/image/brown-leaf-icon.png"

function KeyCards() {
	return (
		<div className="text-[#873807] w-full h-full flex justify-center items-center flex-col">
		</div>
	);
}

function OurMission() {

	return (
		<div className="w-full h-[100vh] bg-[#77be2099] px-[10%] flex justify-center items-center">
			<div className="w-[50%] px-[5%]">
				<h1 className="mb-4 font-bold text-[48px] text-[#2E1B0F]">A fully integrated suite of fertilizing and exterminating products</h1>
				<p className="text-[18px] text-[#2e1b0fa7]">Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use UBC AGrobot to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.</p>
			</div>
			<div className="w-[40%] ml-[10%]">
				<KeyCards />
			</div>
		</div>
	);
}

export default OurMission;