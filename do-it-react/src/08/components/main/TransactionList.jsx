// TransactionSearchFilter컴포넌트와 TransactionTable컴포넌트를 Card 컴포넌트에 담아 배치
// 검색 결과를 확인하기 위해 state에 임의의 transactions배열을 정의하여 프로퍼티로 전달하였음.
// 하단화면
// 액션 함수로 호출
// TransactionList 컴포넌트에 loading 프로퍼티 전달

import React, { PureComponent } from 'react';
//import Api from '../../Api';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

//import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    //Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
    this.props.requestTransactionList();
  }

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
        <TransactionPaginationContainer />
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transaction: [],
  setTransactionList: () => {},
};

export default TransactionList;
