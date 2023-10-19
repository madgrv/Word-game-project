import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
	const result = checkGuess(value, answer);
	// console.log({ result });

	return (
		<div className="guess-results">
			<p className="guess">
				{range(5).map((lett) => (
					<span
						key={lett}
						className={`cell ${result ? result[lett].status : undefined}`}
					>
						{value ? value[lett] : undefined}
					</span>
				))}
			</p>
		</div>
	);
}

export default Guess;
