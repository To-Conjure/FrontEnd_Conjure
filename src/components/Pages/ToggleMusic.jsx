// import soundON from '../music/sound-on.png'
// import soundOFF from '../music/sound-off.png'
// import battleMusic from '../music/galatic.wav'
// import Context from '../../Context/Context'
// import React, {useContext } from "react";

// const ToggleMusic = () => {
//     const {setMusic} = useContext(Context)
//     const audioBG = new Audio(battleMusic);

//     // const backgroundMusic = (e) => {
//     //     if (!isMusic) {
//     //         audioBG.volume = 0.3;
//     //         audioBG.loop = true;
//     //         audioBG.play();
//     //         isMusic = true;
//     //         e.target.src = soundON;
//     //     }
//     //     else {
//     //         audioBG.pause();
//     //         isMusic = false;
//     //         e.target.src = soundOFF;
//     //     }
//     //   }

//     return (
//         <>
//             <img id="musicTrigger" alt="sound icon" src={setMusic ? soundON : soundOFF} className="absolute opacity-80 w-[40px] h-[40px] z-10 bottom-10 right-[calc(50vw-20px)] md:bottom-[40px] cursor-pointer"/>
//         </>
//     )
// }

// export default ToggleMusic