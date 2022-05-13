// TransactionSearchFilter컴포넌트와 데이터 컴포넌트 연결하기

import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
import { setTransactionList } from '../../actions/transactionActions';

export default connect(null, { setTransactionList })(TransactionSearchFilter); // 액션만 전달 예정이므로 첫 번쨰 인자에 null 전달
