// 그래프 DB수정에 대한 액션 추가하기

export const SET_AGE = 'collection/SET_AGE';

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});
