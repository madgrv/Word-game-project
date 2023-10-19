import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

import Guess from '../Guess';

function GuessResults({ guess, answer }) {
	// const banner =

	return (
		<div>
			<div className="guess-results"></div>
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => {
				return <Guess key={num} value={guess[num]} answer={answer} />;
			})}
			{/* {banner} */}
		</div>
	);
}

export default GuessResults;
