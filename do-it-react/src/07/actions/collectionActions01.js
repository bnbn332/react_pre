//액션 추가하기

export const SET_COLLECTION = 'collection/SET_COLLECTION';

export const setCollection = (collection) => ({
  type: SET_COLLECTION,
  payload: collection,
});
