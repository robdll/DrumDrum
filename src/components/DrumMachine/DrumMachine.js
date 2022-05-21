import './DrumMachine.css';
import { useState, useRef } from 'react';
const alarm = require('./../../resources/alarm.wav');

function DrumMachine() {
	const audRef = useRef(null);

	const [settings, setSettings] = useState({session: 25, break: 5});
	const [timer, setTimer] = useState({
		minutes: '25', 
		seconds: '00', 
		active: false, 
		isBreak: false
	});
	
	const playAudio = () => {
		console.log('here', audRef)
		audRef.current.play();
	}

	  
	const toggleTimer = (value) => {
		setTimer({ ...timer, active: value})
	}

	const refreshTimer = () => {
		audRef.current.pause();
		setTimer({ 
			minutes: '25',
			seconds: '00', 
			active: false,
			isBreak: false
		})
		setSettings({session: 25, break: 5});
	}

	const editSettings =  (type, val) => {
		if(timer.active) return
		const newSettings = { ...settings }
		newSettings[type] +=val;
		if(newSettings[type] > 60) {
			newSettings[type] = 60
		}
		if(newSettings[type] < 1) {
			newSettings[type] = 1
		}
		setSettings(newSettings)
		if(type === 'session' && !timer.isBreak) {
			setTimer({
				...timer,
				minutes: newSettings[type],
				seconds: '00'
			})
		}
		
	}

	return (
		<div className="DrumMachine">
			{/* <h2 className="title" id="timer-label">{settings.isBreak ? 'Break' : 'Session'}</h2>
			<div className="session-container">
				<div className='session-value' id="time-left">{timer.minutes}:{timer.seconds}</div>
				<div className='controls-container'>
					<span className='icon-container'>
					</span>
					<span className='icon-container'>
					</span>
					<span className='icon-container'>
					</span>
				</div>
			</div>

			<h2 className="title" id="session-label">Session Length</h2>
			<div className="setting-container">
				<span className='icon-container' id="session-decrement" onClick={()=> editSettings('session', -1)}>
				</span>
				<div className="setting-value" id="session-length">{settings.session}</div>
				<span className='icon-container' id="session-decrement" onClick={()=> editSettings('session', 1)}>
				</span>
			</div>
			
			<h2 className="title" id="break-label">Break Length</h2>
			<div className="setting-container">
				<span className='icon-container' id="break-decrement" onClick={()=> editSettings('break', -1)}>
				</span>
				<div className="setting-value">{settings.break}</div>
				<span className='icon-container' id="break-increment" onClick={()=> editSettings('break', +1)}>
				</span>
			</div>
			<audio id="beep" src={alarm} ref={audRef} hidden /> */}
		</div>
		);
	}
	
	export default DrumMachine;
	