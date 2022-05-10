// 리듀서 구현하기

import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = [];

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value, // 여러 검색 조건을 조합할 수 있도록 기존의 검색 항목과 새 검색 항목을 객체 형태로 병합 ex) { name: 'Justin'}인 state에서 { age: 30} 병합 => {name: 'Justin', age: 30}
      };
    }
    case RESET_FILTER: {
      return initState;
    }
    default:
      return state;
  }
}
