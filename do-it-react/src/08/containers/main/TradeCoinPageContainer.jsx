// 데이터 컴포넌트를 추가하여 변경된 TradeCoinPage 컴포넌트의 프로퍼티로 createTransaction()액션 함수를 전달

import { connect } from 'react-redux';
import TradeCoinPage from '../../components/main/TradeCoinPage';
//import { createTransaction } from '../../actions/transactionActions';
import { createTransaction } from '../../actions/transactionPackActions';

export default connect(null, { createTransaction })(TradeCoinPage);
