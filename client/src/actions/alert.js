import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
	const id = uuidv4();
	dispatch({
		type: SET_ALERT,
		payload: { msg, alertType, id },
	});
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});

	setTimeout(
		() =>
			dispatch({
				type: REMOVE_ALERT,
				payload: id,
			}),
		timeout
	);
};
