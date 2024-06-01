// import React from "react";
// import { AgroBotTargetedAction, ArgoBotAutomation, AgroBotDataCollection, } from "../../assets";
// import { SectionHeader } from "../common";
// import * as t from "../../constant/agrobot";
// import { PiMicrophoneStage } from "react-icons/pi";

// function KeyBox(props) {
//     return (
//         <div className='md:w-[32%] bg-[#d5eea7c2] rounded-[14px] my-2'>
//             <div className="flex flex-col md:flex-row w-full p-8">
//                 <div className="md:w-[20%] md:mr-[5%] md:mb-0 mb-5 flex justify-center items-center">
//                     <img src={props.imgSrc} alt='mission'></img>
//                 </div>
//                 <div className='flex flex-col items-center md:items-start md:w-[75%]'>
//                     <h4 className="font-bold text-[#12200B] pb-2 text-xl">{props.children}</h4>
//                     <p className="text-center md:text-left">{props.text}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function AgroBotKeyFeatures() {
//     return (
//         <div className='w-[80%] mx-auto my-[20vh]'>
//             <SectionHeader>{t.KF_Title}</SectionHeader>
//             <div className='flex flex-col md:flex-row justify-between py-6'>
//                 <KeyBox imgSrc={AgroBotTargetedAction} text={t.KF_box1_text}>{t.KF_box1_title}</KeyBox>
//                 <KeyBox imgSrc={ArgoBotAutomation}     text={t.KF_box2_text}>{t.KF_box2_title}</KeyBox>
//                 <KeyBox imgSrc={AgroBotDataCollection} text={t.KF_box3_text}>{t.KF_box3_title}</KeyBox>
//             </div>
//         </div>
//     );
// }

// export default AgroBotKeyFeatures;

import * as THREE from 'three';

import { useEffect, useRef } from "react";

function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <div ref={refContainer}></div>

  );
}

export default MyThree