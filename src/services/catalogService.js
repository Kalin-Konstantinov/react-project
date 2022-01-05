import * as requester from './requester';

export const postCategory = (categoryData, userToken) => requester.post('/category', categoryData, userToken);

export const getAllCategorys = () => requester.get('/category');

export const getOneCategoryByName = (name) => requester.get('/category/' + name );

export const getRecipesByCategory = (categoryName) => requester.get(`/category/${categoryName}`);
