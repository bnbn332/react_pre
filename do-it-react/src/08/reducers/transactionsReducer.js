// 로딩 상태 저장하도록 리듀서 변경
// 에러메시지 리듀서 수정

import {
  LOADING_TRANSACTION_LIST,
  SET_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/transactionActions';

const initState = {
  ids: [],
  entities: {},
  loading: false, // state 초깃값에 loading 추가
  hasError: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      };
    }

    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true, // LOADING_TRANSACTION_LIST 액셔닝 들어오면 loading을 true로 변경
        hasError: false,
      };
    }

    case SET_TRANSACTION_LIST: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return {
        ...state,
        ids,
        entities,
        loading: false,
        hasError: false,
      }; // 기존의 SET_TRANSACTION_LIST 액션이 들어오면 loading을 false로 변경
    }
    default:
      return state;
  }
};
