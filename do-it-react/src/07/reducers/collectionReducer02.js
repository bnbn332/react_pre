// reduce() 함수로 객체 배열 자료를 객체 형태로 변환하기

import { SET_COLLECTION } from '../actions/collectionActions01';

const initState = {
  ids: [],
  entities: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COLLECTION: {
      // payload의 하위에 ids와 entities를 저장
      const ids = payload.map((entity) => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity,
        }),
        {},
      );
      return { ...state, ids, entities };
    }
    default:
      return state;
  }
};
