// 셀렉터 생성
import { FETCH_TRANSACTION_LIST, CREATE_TRANSACTION } from '../actions/transactionPackActions';
import { createSelector } from 'reselect';

export const transactionsSelector = (state) => state.transactions;

export const transactionListSelector = createSelector([transactionsSelector], (transactions) => {
  const { ids, entities } = transactions;
  return ids.map((id) => entities[id]);
});
export const loadingStateSelector = (state) => transactionsSelector(state).loadingState;
export const transactionListLoadingStateSelector = (state) =>
  loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
export const transactionCreateLoadingStateSelector = (state) =>
  loadingStateSelector(state)[CREATE_TRANSACTION];
