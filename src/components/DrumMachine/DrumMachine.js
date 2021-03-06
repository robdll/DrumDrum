import './DrumMachine.css';
import { useState, useEffect } from 'react';

const sound1 = require('./../../resources/Cev_H2.mp3');
const sound2 = require('./../../resources/Dsc_Oh.mp3');
const sound3 = require('../../resources/Heater1.mp3');
const sound4 = require('./../../resources/Heater-2.mp3');
const sound5 = require('./../../resources/Heater-3.mp3');
const sound6 = require('./../../resources/Heater-4_1.mp3');
const sound7 = require('./../../resources/Heater-6.mp3');
const sound8 = require('./../../resources/Kick_n_Hat.mp3');
const sound9 = require('./../../resources/RP4_KICK_1.mp3');

function DrumMachine() {

	const [display, setDisplay] = useState('Press a Pad to start');
	const sounds = [
        {
            keyCode: 81,
            keyTrigger: "Q",
            id: "Heater-1",
			sound: sound3
        },
        {
            keyCode: 87,
            keyTrigger: "W",
            id: "Heater-2",
			sound: sound4
        },
        {
            keyCode: 69,
            keyTrigger: "E",
            id: "Heater-3",
			sound: sound5
        },
        {
            keyCode: 65,
            keyTrigger: "A",
            id: "Heater-4",
			sound: sound6
        },
        {
            keyCode: 83,
            keyTrigger: "S",
            id: "Clap",
			sound: sound7
        },
		{
			keyCode: 68,
            keyTrigger: "D",
            id: "Open-HH",
			sound: sound2
        },
        {
            keyCode: 90,
            keyTrigger: "Z",
            id: "Kick-n-Hat",
			sound: sound8
        },
        {
            keyCode: 88,
            keyTrigger: "X",
            id: "Kick",
			sound: sound9
        },
		{
			keyCode: 67,
			keyTrigger: "C",
			id: "Closed-HH",
			sound: sound1
		}
    ]  

	const onKeyDownhandler = ({keyCode}) => {
		const item = sounds.find( item => item.keyCode === keyCode);
		if(item) {
			playSound(item)
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', onKeyDownhandler);
		return () => {
		  document.removeEventListener('keydown', onKeyDownhandler);
		};
	});

	const playSound = (item) => {
		console.log(item.id)
		const sound = document.getElementById(item.keyTrigger);
		sound.play();
		setDisplay(item.id)
	}

	const pads = sounds.map( (item) => {
		return <div 
			id={item.id} 
			className="drum-pad" 
			key={item.id} 
			onClick={()=>playSound(item)}
		>
			<span>{item.keyTrigger}</span>
			
			<audio className="clip" id={item.keyTrigger} src={item.sound} hidden />
		</div>
	})

	return (
		<div className="DrumMachine" id="drum-machine">
			<div id="display"> {display} </div>
			{pads}
		</div>
		);
	}
	
	export default DrumMachine;
	
