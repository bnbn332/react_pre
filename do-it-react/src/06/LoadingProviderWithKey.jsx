//공급자를 반환하는 커링 함수 만들기

import React from 'react';
import PropTypes from 'prop-types';

export const DEFAULT_KEY = 'defaultLoadingKey'; //공급자의 기본 키값 정보를 공유
export const contextPropTypes = {
  //공급자에 정의된 컨텍스트 데이터의 자료형을 공유
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default (contextKey = DEFAULT_KEY) => {
  //contextKey = DEFAULT_KEY를 통해 컨텍스트 데이터의 기본키값을 정함
  class LoadingProvider extends React.Component {
    constructor(props) {
      super(props);

      this.state = { loading: false };
      this.setLoading = this.setLoading.bind(this);
    }

    getChildContext() {
      return {
        [contextKey]: {
          //contextKey에 해당하는 로딩 상태 정보 객체(공급자의 컨텍스트 데이터)를 반환
          loading: this.state.loading,
          setLoading: this.setLoading,
        },
      };
    }

    setLoading(loading) {
      this.setState({ loading });
    }

    render() {
      return this.props.children;
    }
  }

  LoadingProvider.childContextTypes = {
    [contextKey]: contextPropTypes,
  };

  return LoadingProvider;
};
