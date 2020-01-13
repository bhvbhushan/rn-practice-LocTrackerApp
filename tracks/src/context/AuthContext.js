import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_err':
      return { ...state, errMessage: action.payload };
    case 'signin':
      return { errMessage: '', token: action.payload };
    case 'clr_err_msg':
      return { ...state, errMessage: '' };
    default:
      return state;
  }
};

const clearErrMessage = dispatch => () => {
  dispatch({ type: 'clr_err_msg' });
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_err',
      payload: err.message
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_err',
      payload: err.message
    });
  }
};

const signout = dispatch => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrMessage },
  { token: null, errMessage: '' }
);
