import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guessinput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner/Banner';
import NewGame from '../NewGame/NewGame';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guess, setGuess] = React.useState([]);

	const [gameStatus, setGameStatus] = React.useState(undefined);
	const numGuesses = guess.length;

	function handleSubmitGuess(attempt) {
		const nextGuess = [...guess, attempt];
		setGuess(nextGuess);

		if (attempt === answer) {
			setGameStatus('correct');
		} else if (
			nextGuess.length >= NUM_OF_GUESSES_ALLOWED &&
			attempt !== answer
		) {
			setGameStatus('wrong');
		}
	}

	return (
		<>
			<GuessResults guess={guess} answer={answer} />
			<Guessinput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
				// guess={guess}
				// setGuess={setGuess}
			/>
			{/* <Keyboard /> */}
			{gameStatus && <NewGame />}
			{gameStatus && (
				<Banner
					gameStatus={gameStatus}
					answer={answer}
					numGuesses={numGuesses}
				/>
			)}
		</>
	);
}

export default Game;
