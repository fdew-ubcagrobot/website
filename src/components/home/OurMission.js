import LeafIcon from "../../assets/image/brown-leaf-icon.png"
import { useSpring, animated } from 'react-spring';

const height = 440
const width = 540

const cardWidth = 400
const cardHeight = 250

const centerX = cardWidth / 2
const centerY = height - (cardHeight / 2)
const offsetX = (width - cardWidth) / 2
const offsetY = (height - cardHeight) / 2

const homePos = { left: centerX, top: centerY }
const offsetOne = { left: centerX + offsetX, top: centerY - offsetY }
const offsetTwo = { left: centerX + 2 * offsetX, top: centerY - 2 * offsetY }

const bottomPos = { left: centerX, top: height + cardHeight / 2 }
const bottomLeftPos = { left: width + cardWidth / 2, top: height + cardHeight / 2 }
const topRightPos = { left: width + cardWidth / 2, top: 0 }

function getNextPos(currentPos) {
	switch (currentPos) {
		case offsetTwo:
			return offsetOne
		case offsetOne:
			return homePos
		case homePos:
			return bottomPos
		case bottomPos:
			return offsetTwo
	}
}

const RectangleAnimation = () => {

	let brownCardPos = homePos
	let greenCardPos = offsetOne
	let redCardPos = offsetTwo
	let blueCardPos = bottomPos

	const brownCard = useSpring({
		from: brownCardPos,
		to: async next => {
			while (true) {
				await new Promise(resolve => setTimeout(resolve, 2000))
				await next(brownCardPos)
				brownCardPos = getNextPos(brownCardPos)
			}
		}
	});

	const greenCard = useSpring({
		from: greenCardPos,
		to: async next => {
			while (true) {
				await new Promise(resolve => setTimeout(resolve, 2000))
				await next(greenCardPos)
				greenCardPos = getNextPos(greenCardPos)
			}
		}
	})

	const redCard = useSpring({
		from: redCardPos,
		to: async next => {
			while (true) {
				await new Promise(resolve => setTimeout(resolve, 2000))
				await next(redCardPos)
				redCardPos = getNextPos(redCardPos)
			}
		}
	})

	const blueCard = useSpring({
		from: blueCardPos,
		to: async next => {
			while (true) {
				await new Promise(resolve => setTimeout(resolve, 2000))
				await next(blueCardPos)
				blueCardPos = getNextPos(blueCardPos)
			}
		}
	})

	return (
		<div className="relative overflow-hidden"
			style={{
				height: height,
				width: width,
			}}>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#3146e1] rounded-md"
				style={{
					transform: 'translate(-50%, -50%)',
					...blueCard,
				}}
			>
				<h2 className="font-bold p-10  text-white">AGROBOT</h2>
			</animated.div>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#E13131] rounded-md"
				style={{
					transform: 'translate(-50%, -50%)',
					...redCard,
				}}
			>
				<h2 className="font-bold p-10  text-white">AGROBOT</h2>
			</animated.div>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#1CF33E] rounded-md"
				style={{
					transform: 'translate(-50%, -50%)',
					...greenCard,
				}}
			>
				<h2 className="font-bold p-10  text-white">AGROBOT</h2>
			</animated.div>

			<animated.div className="absolute w-[400px] h-[250px] bg-[#2E1B0F] rounded-md"
				style={{
					transform: 'translate(-50%, -50%)',
					...brownCard,
				}}
			>
				<h2 className="font-bold p-10  text-white">AGROBOT</h2>
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