const initialState = {
  user: 'max@123.com',
};

export default (state = initialState, action) => {
  //   if (action.type === 'WITHDRAW_MONEY') {
  //     return {...state, amount: state.amount - action.payload};
  //   }

  return {...state, user: 'foo@foo.com'};
};

export const selectCurrentUser = state => {
  return state.authReducer.user;
};
