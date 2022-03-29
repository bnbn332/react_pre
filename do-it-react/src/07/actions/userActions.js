//user 액션 분리하고 리듀서, 앱에 수정

export const SET_USER = 'user/SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
