//소비자를 반환하는 하이어오더 컴포넌트 수정

import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey'; //공급자에 정의된 컨텍스트 데이터의 키값과 항목정보 임포트

export const loadingPropTypes = contextPropTypes; //공급자의 컨텍스트데이터의 자료형을 가져와 loadingPropTypes에 대입

export default (
    contextKey = DEFAULT_KEY, //공급자의 컨텍스트 데이터 키값을 인자로 전달받는 하이어오더 컴포넌트 생성
  ) =>
  (WrappedComponent) => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context) {
      const { loading, setLoading } = context[contextKey]; //키값에 맞는 컨텍스트 데이터 구조 분해 할당
      return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
    }

    WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
    WithLoadingContext.contextTypes = {
      [contextKey]: contextPropTypes, //소비자가 구독할 컨텍스트 데이터의 자료형 이후 구독자의 컨텍스트 데이터 이름이나 자료형이 변경되면 자동으로 소비자에게도 반영
    };
    return WithLoadingContext;
  };
