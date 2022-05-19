// 오류메시지와 Notification 컴포넌트를 연결하는 데이터 컴포넌트

import { connect } from 'react-redux';
import Notification from '../../components/main/Notification';

const mapStateToProps = (state) => {
  const { hasError, errorMessage } = state.transactions;
  return { hasError, errorMessage };
};

export default connect(mapStateToProps)(Notification);
