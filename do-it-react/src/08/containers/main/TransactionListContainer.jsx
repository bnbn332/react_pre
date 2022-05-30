// 데이터 컴포넌트 작성
// TransactionListContainer의 액션 함수 교체
// 데이터 컴포넌트에 loading 추가하기
// 데이터 컴포넌트에 셀렉터 적용

import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
//import { setTransactionList } from '../../actions/transactionActions';
//import { requestTransactionList } from '../../actions/transactionActions';
import {
  requestTransactionList,
  FETCH_TRANSACTION_LIST,
} from '../../actions/transactionPackActions';
import {
  transactionListSelector,
  loadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = (state) => {
  return { transactions: transactionListSelector(state), loading: loadingStateSelector(state) };
};

const mapDispatchToProps = {
  //setTransactionList,
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
