import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../store/actions/counter';
import { selectors } from '../../store/selectors';

const Counter = () => {
	const counter = useSelector(selectors.getCounter);
	const dispatch = useDispatch();

	const handleIncrement = () => dispatch(actions.increment());
	const handleDecrement = () => dispatch(actions.decrement());

	return (
		<section className="section">
			<div className="container">
				<h3 className="subtitle is-2 has-text-weight-bold">
					Counter: {counter}
				</h3>
				<div>
					<button
						type="button"
						className="button is-dark"
						onClick={handleIncrement}
					>
						+
					</button>{' '}
					<button
						type="button"
						className="button is-dark"
						onClick={handleDecrement}
					>
						-
					</button>
				</div>
			</div>
		</section>
	);
};

export default Counter;
