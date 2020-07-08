const initialState = {};
// console.log(initialState);

export const userReducer = (state = initialState, action) => {
  if (action.type == 'SET_USER') {
    return action.payload;
  }
  return state;
};
