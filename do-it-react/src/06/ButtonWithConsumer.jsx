//소비자의 render 프로퍼티에 render()함수 구현하여 전달

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import createLoadingConsumer from './createLoadingConsumer';

const DefaultLoadingConsumer = createLoadingConsumer();
const Loading2Consumer = createLoadingConsumer('loading2');

function ButtonWithConsumer({ children }) {
  return (
    <React.Fragment>
      <DefaultLoadingConsumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트1 로딩중' : children}
          </Button>
        )}
      />
      <Loading2Consumer
        render={({ loading, setLoading }) => (
          <Button onPress={() => setLoading(!loading)}>
            {loading ? '컨텍스트2 로딩중' : children}
          </Button>
        )}
      />
      <DefaultLoadingConsumer //여러 공급자의 컨텍스트 데이터에 소비자가 모두 접근하도록 만들기
        render={({ loading, setLoading }) => (
          <Loading2Consumer
            render={({ loading: loading2 }) => (
              <Button onPress={() => setLoading(!loading)}>
                {loading || loading2 ? '로딩 중' : children}
              </Button>
            )}
          />
        )}
      />
    </React.Fragment>
  );
}

export default ButtonWithConsumer;
