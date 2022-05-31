import { SET_LOCATION } from '../actions/routerActions';
import { setFilter } from '../actions/searchFilterActions';

function parse(qs) {
  // 문자형태의 쿼리스트링값을 객체로 변환
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => chunk.split('='))
    .reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value,
      }),
      {},
    );
}

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_LOCATION) {
    // 주소 동기화 액션일 때만 작동하도록
    const { pathname, search } = payload.location;
    if (pathname === '/') {
      // MainPage에서만 검색 목록을 포함하기 때문에 경로가 일치할 떄만 작동하도록
      store.dispatch(setFilter(parse(search)));
    }
  }
  return result;
};
