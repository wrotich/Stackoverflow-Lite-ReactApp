import constants from '../constants';

export const signUpUser = user => ({
  type: constants.REGISTER_REQUEST,
  user,
});

export const signUpError = user => ({
  type: constants.REGISTER_FAILURE,
  user,
});

export const signUpSuccess = user => ({
  type: constants.REGISTER_SUCCESS,
  user,
});

// the exact endpoint consumption goes here

export default signUpRequest;