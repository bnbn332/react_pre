// 데이터 컴포넌트 작성
// TransactionListContainer의 액션 함수 교체
// 데이터 컴포넌트에 loading 추가하기

import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
//import { setTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionActions';

const mapStateToProps = (state) => {
  const { ids, entities, loading } = state.transactions;
  const transactions = ids.map((id) => entities[id]);

  return { transactions, loading };
};

const mapDispatchToProps = {
  //setTransactionList,
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
