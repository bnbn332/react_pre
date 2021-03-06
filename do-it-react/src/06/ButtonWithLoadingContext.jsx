//하이어컴포넌트로 소비자 만들기

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  //공급자의 데이터를 프로퍼티로 받기
  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩중' : label}</Button>;
}

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext); //소비자를 반환하는 하이어오더 컴포넌트에 Button컴포넌트를 인자로 전달하여 소비자를 구현
