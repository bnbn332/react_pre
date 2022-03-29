import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING': {
      //구조분해 할당으로 {type, payload}를 분해
      return {
        //스위치문으로 액션 타입에 맞는 리듀서 작업을 실행
        ...state,
        loading: payload,
      };
    }
    case 'RESET_LOADING': {
      //type이 RESET_LOADING인 경우 스토어 데이터의 loading값을 무조건 false로 변경합니다.
      return { ...state, loading: false };
    }
    case 'SET_USER': {
      //type이 SET_USER인 경우 PAYLOAD의 값으로 USER의 값을 변경
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};

class ReduxApp extends PureComponent {
  store = createStore(
    reducer,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  componentDidMount() {
    this.store.dispatch({
      //리덕스 스토어를 컴포넌트가 출력된 이후 변경하도록 액션 호출 함수 dispatch()를 실행
      type: 'SET_LOADING',
      payload: true,
    });
    this.store.dispatch({ type: 'RESET_LOADING ' }); //RESET_LOADING에 해당하는 액션 호출
    this.store.dispatch({
      //SET_USER에 해당하는 액션 호출
      type: 'SET_USER',
      payload: { name: 'PARK', age: 20 },
    });
  }
  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp;
