// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'https://my-share-recipes.herokuapp.com';
const AUTHORIZATION_HEADER = 'x-authorization';
const CONTENT_TYPE = 'Content-Type';
const CONTENT_VALUE = 'application/json';

export const get = (path, token) => {
    if (token) {
        return fetch(BASE_URL + path, {
            method: 'GET',
            headers: {
                [CONTENT_TYPE]: CONTENT_VALUE,
                [AUTHORIZATION_HEADER]: token,
            },
        })
            .then(res => res.json())
    }
    return fetch(BASE_URL + path)
        .then(res => res.json());
}

export const post = (path, data, token) => {
    if (token) {
        return fetch(BASE_URL + path, {
            method: 'POST',
            headers: {
                [CONTENT_TYPE]: CONTENT_VALUE,
                [AUTHORIZATION_HEADER]: token,
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
    }
    if (!data) {
        return fetch(BASE_URL + path, {
            method: 'POST',
            headers: {
                [CONTENT_TYPE]: CONTENT_VALUE,
                [AUTHORIZATION_HEADER]: token,
            },
        })
            .then(res => res.json())
            .catch(res => console.log(res))
    }
    return fetch(BASE_URL + path, {
        method: 'POST',
        headers: {
            [CONTENT_TYPE]: CONTENT_VALUE,
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())

}

export const put = (path, data, token) => {
    return fetch(BASE_URL + path, {
        method: 'PUT',
        headers: {
            [CONTENT_TYPE]: CONTENT_VALUE,
            [AUTHORIZATION_HEADER]: token,
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())

}

export const del = (path, token) => {
    return fetch(BASE_URL + path, {
        method: 'DELETE',
        headers: {
            [CONTENT_TYPE]: CONTENT_VALUE,
            [AUTHORIZATION_HEADER]: token,
        },
    })
}