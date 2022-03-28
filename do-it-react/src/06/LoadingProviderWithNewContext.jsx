//createContext()함수로 공급자 만들기

import React from 'react';
const { Provider, Consumer } = React.createContext({});

export { Consumer }; //소비자를 export 이후 이소비자가 공급자의 컨텍스트 데이터를 구독하게 될것

export default class LoadingProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      ...this.state, //컨텍스트 데이터에 state값과 함께 콜백 함수 setLoading()을 추가
      setLoading: this.setLoading,
    };

    return (
      //공급자가 공유할 컨텍스트 데이터를 value 프로퍼티에 전달
      //자식 프로퍼티를 출력하여 자식 컴포넌트에 컨텍스트 데이터를 전달
      <Provider value={context}>{this.props.children}</Provider>
    );
  }
}
