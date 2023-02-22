import { Sky} from "@react-three/drei";

const date = new Date().toLocaleTimeString();
const num = +date.split(":")[0]
const time = date[date.length - 2];
let sky = "";
const morning = [100, 100, 20];
const night = [0, 0, 0];
const sunrise = [1, 1, -10];
const sunset = [1, 1, 100];

// console.log(num,time)
if (num > 6 && num < 13 && time == "A") sky = morning;
if (num >= 1 && num <= 6 && time == "A") sky = sunrise;
if (num > 6 && num < 13 && time == "P") sky = night;
if (num >= 1 && num <= 6 && time == "P") sky = sunset;


export default function SkyTime(){
    return (
        <Sky sunPosition={sky} />
    )
}