// TransactionSearchFilter컴포넌트와 데이터 컴포넌트 연결하기
// 데이터 컴포넌트의 액션 함수 교체하고 TransactionSearchFilter 컴포넌트에 적용하기

import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
//import { requestTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions'; // 검색 정보 액션 연결

//export default connect(null, { setTransactionList })(TransactionSearchFilter); // 액션만 전달 예정이므로 첫 번쨰 인자에 null 전달

const mapStateToProps = (state) => ({
  initValues: state.searchFilter.params,
});

export default connect(mapStateToProps)(TransactionSearchFilter);
