// TransactionSearchFilter컴포넌트와 TransactionTable컴포넌트를 Card 컴포넌트에 담아 배치
// 검색 결과를 확인하기 위해 state에 임의의 transactions배열을 정의하여 프로퍼티로 전달하였음.
// 하단화면

import React, { PureComponent } from 'react';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';
import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  state = {
    transactions: [
      {
        id: 'btx_01',
        name: '비트코인(BTX)',
        totalPrice: '123,123,000,000원',
        currentPrice: '4,200,000원',
        datetime: '2019/01/20 08:23:22',
      },
    ],
  };

  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

export default TransactionList;
