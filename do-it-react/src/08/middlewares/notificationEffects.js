// NotificationEffects 미들웨어 생성하기    SET_ERROR 액션을 미들웨어에서 처리하도록 구성
// 알림 효과 미들웨어에 숨김 액션 추가
// 디바운스 도입하기
// redux-pack으로 오류 알림창 출력하기
// meta정보를 이용하여 notification 항목이 포함될 때만 showMessage() 액션을 호출하도록 변경

//import { SET_ERROR } from '../actions/transactionActions';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import { debounce } from '../../02/debounce';
import { KEY, LIFECYCLE } from 'redux-pack';
import { FETCH_TRANSACTION_LIST } from '../actions/transactionPackActions';

const debounceRunner = debounce((action) => action(), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, meta } = action;
  if (meta && meta.notification) {
    const { success, error } = meta.notification;
    if (success && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
      store.dispatch(showMessage(success));
    } else if (error && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
      store.dispatch(showMessage(error, true));
    }
  }
  return nextRunner(action);
};
