import LeafIcon from "../../assets/image/brown-leaf-icon.png"
import { useSpring, animated } from 'react-spring';

function InfoCard({title}) {
	return(
		<div className="w-full h-full p-10  text-white bg-[#2E1B0F] rounded-md">
			<h2 className="font-bold">{title}</h2>
		</div>
	)
}

const RectangleAnimation = () => {
	const rectangles = [
		{ top: 0, left: 540 },
		{ top: 0, left: 0 },
		{ top: 540, left: 0 },
		{ top: 540, left: 540 },
	  ];
	  
	const props = useSpring({
		from: { top: 0, left: 540 },
		to: async (next) => {
			while (true) {
				await new Promise((resolve) => setTimeout(resolve, 4000)); // Wait for 6 seconds
				await next({ top: 270, left: 270 });
				await new Promise((resolve) => setTimeout(resolve, 4000)); // Wait for 6 seconds
				await next({ top: 540, left: 270 });
				await next({ top: 530, left: 540 });
				await next({ top: 0, left: 540 });
			}
		},
		config: { duration: 500 },
	});

	const prop2 = useSpring({
		from: { top: 270, left: 270 },
		to: async (next) => {
			while (true) {
				await new Promise((resolve) => setTimeout(resolve, 4000));
				await next({ top: 530, left: 270 });
				await next({ top: 530, left: 530 });
				await next({ top: 0, left: 540 });
				await new Promise((resolve) => setTimeout(resolve, 4000)); // Wait for 6 seconds
				await next({ top: 270, left: 270 });

			}
		},
		config: { duration: 500 },
	});

	return (
		<div className="relative w-[540px] h-[540px] overflow-hidden">
			<animated.div className="absolute w-[400px] h-[250px] bg-[#2E1B0F] rounded-md"
				style={{
					transform: 'translate(-50%, -50%)',
					...props,
				}}
			>
				<InfoCard title="AGROBOT"/>
			</animated.div>
			<animated.div className="absolute w-[400px] h-[250px] bg-[#2E1B0F] rounded-md"
				style={{
					transform: 'translate(-50%, -50%)',
					...prop2,
				}}
			>
				<InfoCard title="TWOTEST"/>
			</animated.div>
		</div>
	);
};

function OurMission() {

	return (
		<div className="w-full h-[100vh] bg-[#77be2099] px-[10%] flex justify-center items-center">
			<div className="w-[50%] px-[5%]">
				<h1 className="mb-4 font-bold text-[48px] text-[#2E1B0F]">A fully integrated suite of fertilizing and exterminating products</h1>
				<p className="text-[18px] text-[#2e1b0fa7]">Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use UBC AGrobot to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.</p>
			</div>
			<div className="ml-[10%] flex justify-center items-center">
				<RectangleAnimation />
			</div>
		</div>
	);
}

export default OurMission;