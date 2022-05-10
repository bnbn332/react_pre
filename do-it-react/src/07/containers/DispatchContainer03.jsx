// 액션 함수 컴포넌트에 연결하기

import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

const mapdispatchToprops = {
  setLoading,
  resetLoading,
  setUser,
  setAge,
  setCollection,
};

export default connect(null, mapdispatchToprops)(ActionComponent);
