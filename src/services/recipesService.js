import * as request from './requester';


export const createRecepe = (recepeData, userToken) => request.post('/recipes', recepeData, userToken);