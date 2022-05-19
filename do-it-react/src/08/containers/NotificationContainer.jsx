//  Notification 컴포넌트와 리듀서를 연결하여 데이터 컴포넌트 만들기

import { connect } from 'react-redux';
import Notification from '../components/Notification';

const mapStateToProps = (state) => {
  const { showMessage, message, warning } = state.notification;

  return { showMessage, message, warning };
};

export default connect(mapStateToProps)(Notification);
