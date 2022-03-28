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
  }
  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp;
