import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';
// axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */

/////////////////////////////////

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

// const register = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

////////////////////////////////

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */

const logIn = credentials => dispatch => {};

/////////////////////////////////////////
// const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });
///////////////////////////////////////

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */

const logOut = () => dispatch => {};

/////////////////////////////////////////
// const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });
///////////////////////////////////

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

const getCurrentUser = () => (dispatch, getState) => {};

//////////////////////////////////////////
// const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       console.log('Токена нет, уходим из fetchCurrentUser');
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       // TODO: Добавить обработку ошибки error.message
//     }
//   },
// );
///////////////////////////////////////

const operations = {
  register,
  logOut,
  logIn,
  getCurrentUser,
  // fetchCurrentUser,
};
export default operations;
