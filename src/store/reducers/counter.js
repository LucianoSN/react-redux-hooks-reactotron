import { actionsTypes } from '../../helpers/enums';

const INITIAL_STATE = {
	counter: 0,
};

const reducers = (state = INITIAL_STATE, action) => {
	console.tron.log(state);

	let total;
	switch (action.type) {
		case actionsTypes.COUNTER_DECREMENT:
			total = state.counter - 1;
			if (total < 0) return { ...state };
			return { ...state, counter: total };
		case actionsTypes.COUNTER_INCREMENT:
			total = state.counter + 1;
			return { ...state, counter: total };
		default:
			return state;
	}
};

export { reducers };
