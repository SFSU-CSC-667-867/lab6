const INITIAL_STATE = {
  userName: '',
  passWord: '',
  loginState: 'INITIAL',
};
//  {
//   type: 'UPDATE_USERNAME',
//   userName,
// };
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        userName: action.userName,
      };
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        passWord: action.passWord,
      };
    case 'SUBMIT':
      return {
        ...state,
        loginState: 'LOGGED_IN',
      };
    default:
      return state;
  }
};

export default userReducer;