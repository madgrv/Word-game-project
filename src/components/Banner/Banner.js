import React from 'react';

function Banner({ gameStatus, answer, numGuesses }) {
	return (
		<div>
			{gameStatus === 'correct' ? (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in{' '}
						<strong>
							{numGuesses > 1 ? numGuesses + ' guesses' : numGuesses + ' guess'}
						</strong>
					</p>
				</div>
			) : (
				<div className="sad banner">
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</div>
			)}
		</div>
	);
}

export default Banner;
