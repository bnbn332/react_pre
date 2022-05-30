// 로딩 상태 저장하도록 리듀서 변경
// 에러메시지 리듀서 수정
// 페이지 정보 항목을 추가
// 액션 type에 따라 로딩과 오류 상태 따로 보관하기
// 생성 액션 처리하기

import {
  LOADING_TRANSACTION_LIST,
  SET_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/transactionActions';
import { handle } from 'redux-pack';
import { CREATE_TRANSACTION, FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

const initState = {
  ids: [],
  entities: {},
  loadingState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false,
  },
  errorState: {
    [CREATE_TRANSACTION]: false,
    [FETCH_TRANSACTION_LIST]: false,
  },
  pagination: {},
  pages: {},
};

export default (state = initState, action) => {
  const { type, payload, meta } = action;

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
    case CREATE_TRANSACTION:
    case FETCH_TRANSACTION_LIST: {
      return handle(state, action, {
        // case LOADING_TANSACTION_LIST 와 동일
        start: (prevState) => ({
          ...prevState,
          loading: true,
          hasError: false,
          loadingState: {
            ...prevState.loadingState,
            [type]: true,
          },
          errorState: {
            ...prevState.errorState,
            [type]: false,
          },
        }),
        // case SET_TRANSACTION_LIST와 거의 유사함
        success: (prevState) => {
          const { data } = payload;
          const loadingAndErrorState = {
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: false,
            },
          };
          if (type === FETCH_TRANSACTION_LIST) {
            const { pageNumber, pageSize } = meta || {};
            const ids = data.map((entity) => entity['id']);
            const entities = data.reduce(
              (finalEntities, entity) => ({
                ...finalEntities,
                [entity['id']]: entity,
              }),
              {},
            );
            return {
              ...prevState,
              ...loadingAndErrorState,
              ids,
              entities: { ...prevState.entities, ...entities },
              pagination: {
                number: pageNumber,
                size: pageSize,
              },
              pages: {
                ...prevState.pages,
                [pageNumber]: ids,
              },
            };
          } else {
            const id = data['id'];
            return {
              ...prevState,
              ...loadingAndErrorState,
              id,
              entities: { ...prevState.entities, [id]: data },
            };
          }
        },
        // case SET_ERROR와 거의 유사함
        failure: (prevState) => {
          const { errorMessage } = payload.response.data;
          return {
            ...prevState,
            loading: false,
            hasError: true,
            loadingState: {
              ...prevState.loadingState,
              [type]: false,
            },
            errorState: {
              ...prevState.errorState,
              [type]: errorMessage || true,
            },
          };
        },
      });
    }

    default:
      return state;
  }
};
