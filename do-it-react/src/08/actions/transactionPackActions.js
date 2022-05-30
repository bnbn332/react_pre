// 거래 목록을 요청하는 액션 함수 추가
// 거래 요청 함수의 모달 닫힘 기능을 onSucess 이벤트 함수로 구현
// meta에 오류 메시지 포함하기
// 거래 요청 함수에 알림 메시지 추가하기
// 액션에 페이지 정보 추가하기

import Api from '../Api';
import createActions from '../../11/api-redux-pack/createActions';

const { collection, create, reset } = createActions('transactions');
const PAGE_SIZE = 10;

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

export const resetTransactionList = reset;
export function requestTransactionList(params, _page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트하였습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
    },
  };
  return collection(
    {
      ...params,
      _page,
      _limit: PAGE_SIZE,
    },
    meta,
  );
}

export function createTransaction(data, onComplete) {
  const meta = {
    onSuccess: onComplete,
    notification: {
      success: '거래가 성공적으로 완료되었습니다.',
    },
  };
  return create(data, {}, meta);
}
