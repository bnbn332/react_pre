// 리듀서에 그래프 DB 자료 수정하는 코드 추가하기

import { SET_COLLECTION, SET_AGE } from '../actions/collectionActions';

const initState = {
  ids: [],
  entities: [],
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalentities, entity) => ({
          ...finalentities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age },
        },
      };
    }
    default:
      return state;
  }
};
