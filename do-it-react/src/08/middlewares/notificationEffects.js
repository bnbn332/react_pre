// NotificationEffects 미들웨어 생성하기    SET_ERROR 액션을 미들웨어에서 처리하도록 구성
// 알림 효과 미들웨어에 숨김 액션 추가
// 디바운스 도입하기

import { SET_ERROR } from '../actions/transactionActions';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';
import { debounce } from '../../02/debounce';

const debounceRunner = debounce((action) => action(), 4000);

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;

  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    setTimeout(hide, 4000);
    debounceRunner(hide);
  }
  return nextRunner(action);
};
