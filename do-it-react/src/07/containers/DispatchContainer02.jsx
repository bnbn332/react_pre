//  mapDispatchToProp() 함수에서 dispatch 인자 생략하기

import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent';
import { setAge } from '../actions/collectionActions';

const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
