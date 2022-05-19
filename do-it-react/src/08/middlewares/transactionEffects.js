// 거래 처리 과정의 알림 메시지 미들웨어 추가하기
// 거래 요청이 완료되면 자동으로 변경된 거래 목록을 요청하도록

import { TRADE_COMPLETE, requestTransactionList } from '../actions/transactionActions';
import { showMessage } from '../actions/notificationActions';

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === TRADE_COMPLETE) {
    const message = '거래 목록을 최신 정보로 업데이트 하였습니다.';
    store.dispatch(showMessage(message)); // 알림 액션 함수(showMessage)를 호출하여 성공 메시지를 출력
    store.dispatch(requestTransactionList()); // 액션 함수를 호출하여 새로운 거래 목록을 요청
  }
};
