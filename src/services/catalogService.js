import * as requester from './requester';

export const postCategory = (categoryData, userToken) => requester.post('/category', categoryData, userToken);

export const getAllCategorys = () => requester.get('/category');