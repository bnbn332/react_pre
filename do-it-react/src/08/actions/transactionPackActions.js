// 거래 목록을 요청하는 액션 함수 추가
// 거래 요청 함수의 모달 닫힘 기능을 onSucess 이벤트 함수로 구현
// meta에 오류 메시지 포함하기
// 거래 요청 함수에 알림 메시지 추가하기

import Api from '../Api';

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

export function requestTransactionList(params) {
  return {
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('/transactions', { params }),
    meta: {
      notification: {
        error: '거래 목록을 갱신하는 중에 문제가 발생했습니다.',
      },
    },
  };
}

export function createTransaction(data, onComplete) {
  return {
    type: CREATE_TRANSACTION,
    promise: Api.get('/transactions', data),
    meta: {
      onSuccess: onComplete,
      notification: {
        success: '거래가 성공적으로 완료되었습니다.',
      },
    },
  };
}
