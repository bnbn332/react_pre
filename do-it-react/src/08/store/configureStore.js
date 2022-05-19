// 스토어 설정 파일
// 간단한 미들웨어 만들어 적용
// 리듀서 실행 이후 작업하는 미들웨어 만들기
// 미들웨어로 액션 변형하기, 특정 액션의 payload값 변경
// 2개의 미들웨어 조합하여 리덕스에 등록하기
// 다중 미들웨어와 리덕스 크롬 확장 도구 조합
// redux-thunk 미들웨어 추가하기
// notificationEffects 추가

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import thunk from 'redux-thunk';
import notificationEffects from '../middlewares/notificationEffects';
import transactionEffects from '../middlewares/transactionEffects';

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log('액션 객체', action); // nextRunner() 함수 이전에 실행할 작업 1
  console.log('리듀서 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('저장소 상태', store.getState()); // nextRunner() 함수 이전에 실행할 작업 2
  return nextRunner(action);
};

const customMiddleware1 = () => (nextRunner) => (action) => {
  if (action.type === SET_TRANSACTION_LIST) {
    return nextRunner({
      ...action,
      payload: [
        {
          id: 0,
          code: 'DOGE',
          name: '도지코인(DOGE)',
          totalPrice: 100000000,
          currentPrice: 25000,
          datetime: '현재시간',
        },
      ],
    });
  }
  return nextRunner(action);
};

const customMiddleware2 = (store) => (nextRunner) => (action) => {
  console.log('미들웨어2에 전달된 액션 객체', action); // 1
  console.log('리듀서 실행전', store.getState()); // 2
  const result = nextRunner(action); // 3
  console.log('리듀서 실행 후', store.getState()); // 4
  return result; // 5
};

const customMiddleware3 = (store) => (nextRunner) => (action) => {
  console.log('미들웨어3에 전달된 액션 객체', action); // 6
  console.log('미들웨어3 실행 전', store.getState()); // 7
  const result = nextRunner(action); // 8
  console.log('미들웨어3 실행 후', store.getState()); // 9
  return result; // 10
};

export default (initStates) =>
  createStore(
    combineReducers(reducers),
    initStates,
    /*composeWithDevTools(
      applyMiddleware(customMiddleware2, customMiddleware3), // 순서 1 -> 2 -> 3(다음미들웨어 실행) -> 6 -> 7 -> 8 -> 리듀서 실행 -> 9- > 10(이전미들웨어로 돌아감) -> 4 -> 5
    ),*/
    composeWithDevTools(applyMiddleware(thunk, notificationEffects, transactionEffects)),
  );
