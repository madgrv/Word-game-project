import React from 'react';

function Keyboard() {
	const lettersTop = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const lettersMid = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const lettersBott = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

	return (
		<div className="key-wrapper">
			<div className="key-row">
				{lettersTop.map((lett) => (
					<div key={lett} className="key-cell">
						{lett}
					</div>
				))}
			</div>
			<div className="key-row">
				{lettersMid.map((lett) => (
					<div key={lett} className="key-cell">
						{lett}
					</div>
				))}
			</div>
			<div className="key-row">
				{lettersBott.map((lett) => (
					<div key={lett} className="key-cell">
						{lett}
					</div>
				))}
			</div>
		</div>
	);
}

export default Keyboard;
