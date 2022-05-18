// 액션 구성하기
// 가상 코인 거래소에 거래 목록을 요청하는 액션 함수 추가하기
// 검색을 통해 거래 목록을 불러올 수 있도록 액션함수 수정하기

import Api from '../Api';

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}

export function requestTransactionList(params) {
  return (dispatch) =>
    Api.get('/transactions', { params }).then(({ data }) => dispatch(setTransactionList(data)));
}
