// 액션 구성하기

export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
  };
}
