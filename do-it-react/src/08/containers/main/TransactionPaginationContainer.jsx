// TransactionPagination 컴포넌트에 전달할 액션과 스토어 데이터를 연결
// 검색 입력 스토어 데이터를 연결

import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPaginations';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import { loadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  const { pagination } = state.transactions;
  const { number } = pagination;
  return { pageNumber: number || 1, loading: loadingStateSelector(state) };
};

const mapDispatchToProps = {
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
