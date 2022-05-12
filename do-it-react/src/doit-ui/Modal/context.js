// 공급자와 소비자 생성하기
// 컨텍스트를 이용하여 모달을 제어할 수 있도록 공급자와 소비자를 생성
// context.js파일을 만들어 순환 참조 문제도 해결

import React from 'react';
export const { Provider, Consumer } = React.createContext();
