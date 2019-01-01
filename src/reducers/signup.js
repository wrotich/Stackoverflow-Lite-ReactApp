import constants from '../constants';

export const initialState = {
  success: false,
  status: 'error',
  visible: false,
  message: '',
};

function registration(state = initialState, action) {
  switch (action.type) {
    case constants.REGISTER_REQUEST:
      return { };
    case constants.REGISTER_SUCCESS:
      return { success: true,
        status: 'success',
        visible: true,
        message: 'You have been successfully registered, kindly check your email to verify your account' };
    case constants.REGISTER_FAILURE:
      return { success: false, status: 'error', visible: true, message: action.user };
    default:
      return state;
  }
}

export default registration;
