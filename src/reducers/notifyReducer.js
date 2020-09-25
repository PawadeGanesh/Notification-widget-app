const initialState = {
	notifications: [
		{ id: 1, title: 'Red', desc: 'It is red color', color: 'red' },
		{ id: 2, title: 'Blue', desc: 'It is blue color', color: 'blue' },
		{ id: 3, title: 'Green', desc: 'It is green color', color: 'green' },
		{ id: 4, title: 'Yellow', desc: 'It is yellow color', color: 'yellow' },
		{ id: 5, title: 'Grey', desc: 'It is grey color', color: 'grey' },
		{ id: 6, title: 'White', desc: 'It is white color', color: 'white' },
	],
	total: 0,
};

export const notifyReducer = (state = initialState, action) => {
	switch (action.payload) {
		default:
			return { ...state };
	}
};
