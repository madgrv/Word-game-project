import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();

		if (guess.length < 5) {
			window.alert('Please enter 5 characters');
			return;
		}

		console.log({ guess });
		handleSubmitGuess(guess);
		setGuess('');
	}

	return (
		<div>
			<form className="guess-input-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					required
					disabled={gameStatus !== undefined}
					value={guess}
					minLength={5}
					maxLength={5}
					// pattern="[a-zA-Z] {5}"
					// title="Enter a 5 letters word"
					onChange={(e) => {
						setGuess(e.target.value.toUpperCase());
					}}
					id="guess-input"
					type="text"
				/>
			</form>
		</div>
	);
}

export default GuessInput;
