import { BsGraphUp } from "react-icons/bs";
import { RiSettingsFill } from "react-icons/ri";
import { MdOutlineSettingsInputHdmi } from "react-icons/md";
import { HomeAutomation, HomeDataCollection, HomeModularChassis, HomeTargetedAction, HomeChemicalBalancing, HomeFullyAutonomous, HomeNutrientCycling } from '../assets';


export const PS1Title = "Achievements and Participation";

export const stats = [
  {
    icon: <BsGraphUp className="text-3xl text-white" />,
    heading: "Text 1",
    text: "Description 1",
  },
  {
    icon: <RiSettingsFill className="text-3xl text-white" />,
    heading: "Text 1",
    text: "Description 1",
  },
  {
    icon: <MdOutlineSettingsInputHdmi className="text-3xl text-white" />,
    heading: "Text 1",
    text: "Description 1",
  },
];

export const projects = [
  {
      title: 'AgroBot',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      learnMoreNavigationUrl: '/agrobot',
      images: [
          { src: HomeTargetedAction, label: 'Targeted Action' },
          { src: HomeDataCollection, label: 'Data collection' },
          { src: HomeModularChassis, label: 'Modular chassis' },
          { src: HomeAutomation, label: 'Automation' }
      ]
  },
  {
      title: 'AgroPonics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      learnMoreNavigationUrl: '/agroponics',
      images: [
          { src: HomeFullyAutonomous, label: 'Fully Autonomous' },
          { src: HomeNutrientCycling, label: 'Nutrient Cycling' },
          { src: HomeChemicalBalancing, label: 'Chemical Balancing' }
      ]
  }
];
