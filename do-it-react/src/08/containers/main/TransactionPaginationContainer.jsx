// TransactionPagination 컴포넌트에 전달할 액션과 스토어 데이터를 연결
// 검색 입력 스토어 데이터를 연결

import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPaginations';
import { requestTransactionList } from '../../actions/transactionPackActions';
import {
  paginationSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  const { pagination, loading, ids } = state.transactions;
  const { number, size } = pagination;

  return {
    searchParams: state.searchFilter.params,
    hasNext: ids.length === size,
    loading: transactionListLoadingStateSelector(state),
    pageNumber: paginationSelector(state).number || 1,
  };
};
const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
