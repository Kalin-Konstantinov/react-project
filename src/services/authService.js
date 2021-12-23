import * as request from './requester';

export const loginUser = (userData) => request.post('/users/login', userData);

export const registerUser = (userData) => request.post('/users/register', userData);

export const logoutUser = (userToken) => request.post('/users/logout', null, userToken);