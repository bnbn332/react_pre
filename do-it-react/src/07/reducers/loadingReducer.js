//loading 관련 리듀서 분리

import { SET_LOADING, RESET_LOADING } from '../actions/loadingActions';

const initState = false; //초깃값 정의

export default function reducer(state = initState, action) {
  //초깃값을 리듀서의 기본값으로 전달
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return payload; //전달받은 loading을 바로 반환
    }
    case RESET_LOADING: {
      return initState; //맨위에서 정의한 초깃값을 반환
    }
    default:
      return state;
  }
}
